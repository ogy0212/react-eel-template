import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from '@material-ui/core/IconButton';

export const Todo = ({ todo, deleteTodo }: { todo: any; deleteTodo: any }) => {
    return (
        <ListItem button>
            <ListItemText primary={todo.text} />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default Todo;
