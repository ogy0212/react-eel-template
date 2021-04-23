import React from 'react';
import logo from './logo.svg';
import './App.css'
import PickFile from './pick-file/PickFile'

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PickFile></PickFile>
      </header>
    </div>
  );
}

export default App;
