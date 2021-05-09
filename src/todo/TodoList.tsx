import React, { useEffect, useState } from 'react';
import eel from '../Api';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import Todo from './Todo';

export const TodoList = () => {
    const [inputText, setInputText] = useState<string>('');
    const [todoList, setTodoList]: [any, any] = useState([]);

    const handleChange = (e: any) => {
        if (!!e && !!e.target) {
            setInputText(e.target.value);
        }
    }
    
    const getAllTodo = () => {
        eel.get_all_todo()((resp: any) => {
            setTodoList((_: any) => resp);
        });
    }

    const addTodo = () => {
        if (!inputText.trim()){
            return;
        }
        eel.add_todo(inputText.trim())(() =>{
            getAllTodo();
            setInputText((_: string) => '');
        });
    }

    const deleteTodo = (id: number) => {
        eel.delete_todo(id)(() => {
            getAllTodo();
        });
    }

    useEffect(()=>{
        getAllTodo();
    }, []);

    return (
        <>
            <div>
                <TextField style={{ display: 'inline' }} id="standard-basic" label="Add Item Here." value={inputText} onChange={e => handleChange(e)} />
                <Button style={{ display: 'inline' }} color="primary" variant="contained" onClick={() => addTodo()}>Add</Button>
            </div>
            <List component="nav" aria-label="main mailbox folders">
                {todoList.map((todo: any) => (
                    <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo}></Todo>
                ))}
            </List>
        </>
    );
}

export default TodoList;
