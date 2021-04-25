import React from 'react';
import logo from './logo.svg';
import './App.css'
import PickFile from './pick-file/PickFile'

export const App = () => {
  return (
    <div className="App">
      <div className="App-main">
        <img src={logo} className="App-logo" alt="logo" />
        <PickFile></PickFile>
      </div>
    </div>
  );
}

export default App;
