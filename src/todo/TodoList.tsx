import React, { useEffect, useState } from 'react';
import eel from '../Api';

import Todo from './Todo';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';

export const TodoList = () => {
    const [todoList, setTodoList]: [any, any] = useState([]);
    
    const getAllTodo = () => {
        eel.get_all_todo()((resp: any) => {
            setTodoList(_ => resp);
        });
    }

    const addTodo = (text: string) => {
        eel.add_todo(text)(() =>{
            getAllTodo();
        });
    }

    const deleteTodo = (id: any) => {
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
                <TextField style={{ display: 'inline' }} id="standard-basic" label="Add Item Here." />
                <Button style={{ display: 'inline' }} color="primary" variant="contained" onClick={() => addTodo('piyo')}>Add</Button>
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
