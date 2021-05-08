import React, { useEffect, useState } from 'react';
import eel from '../Api'
import Button from '@material-ui/core/Button';

// Set the default path. Would be a text input, but this is a basic example after all
const defPath = '~'

export const PickFile = () => {
    const [message, setMessage] = useState(`Click button to choose a random file from the user's system`);
    const [path, setPath] = useState(defPath);

    const pickFile = () => {
        eel.pick_file(defPath)((message: string) => setMessage(_ => message))
    }

    useEffect(() => {
        eel.expand_user(defPath)((path: string) => setPath(_ => path))
    }, []);
    
    return (
        <>
            <p>{message}</p>
            <Button color="primary" variant="contained" onClick={() => pickFile()}>Pick Random File From `{path}`</Button>
        </>
    );
}

export default PickFile;
