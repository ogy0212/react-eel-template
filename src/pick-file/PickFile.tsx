import React, { useState } from 'react';
import './PickFile.css';

// Point Eel web socket to the instance
export const eel = window.eel

// Set the default path. Would be a text input, but this is a basic example after all
const defPath = '~'

export const PickFile = () => {
    const [message, setMessage] = useState(`Click button to choose a random file from the user's system`);
    const [path, setPath] = useState(defPath);

    const pickFile = () => {
        eel.pick_file(defPath)((message: string) => setMessage(message))
    }

    eel.expand_user(defPath)((path: string) => setPath(path))
    return (
        <>
            <p>{message}</p>
            <button className='PickFile-button' onClick={() => pickFile()}>Pick Random File From `{path}`</button>
        </>
    );
}

export default PickFile;
