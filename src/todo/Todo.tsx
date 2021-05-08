import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';

export const Todo = ({todo, deleteTodo}: {todo: any, deleteTodo: any}) => {

    return (
        <ListItem button>
            <ListItemIcon>
                <DeleteIcon onClick={() => deleteTodo(todo.id)} />
            </ListItemIcon>
            <ListItemText primary={todo.text} />
        </ListItem>
    );
}

export default Todo;