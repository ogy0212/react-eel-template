import React, { useState } from 'react';
import './PickFile.css';

// Point Eel web socket to the instance
export const eel = window.eel
eel.set_host('ws://localhost:8080')

// Expose the `sayHelloJS` function to Python as `say_hello_js`
const sayHelloJS = (x: any) => {
    console.log('Hello from ' + x)
}
// WARN: must use window.eel to keep parse-able eel.expose{...}
window.eel.expose(sayHelloJS, 'say_hello_js')

// Test anonymous function when minimized. See https://github.com/samuelhwilliams/Eel/issues/363
const show_log = (msg: string) => {
    console.log(msg)
}
window.eel.expose(show_log, 'show_log')

// Test calling sayHelloJS, then call the corresponding Python function
sayHelloJS('Javascript World!')
eel.say_hello_py('Javascript World!')

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
