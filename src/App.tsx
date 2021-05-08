import React from 'react';
import logo from './logo.svg';
import './App.css'
import PickFile from './pick-file/PickFile'
import TodoList from './todo/TodoList'

export const App = () => {
  return (
    <div className="App">
      <div className="App-main">
        <img src={logo} className="App-logo" alt="logo" />
        <PickFile></PickFile>
        <TodoList></TodoList>
      </div>
    </div>
  );
}

export default App;
