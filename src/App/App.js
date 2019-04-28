import React from 'react';
import './App.css';
import { SessionMaker } from './components/SessionMaker/SessionMaker';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
      <div className="App">
        Meet Me Halfway
      </div>
      <Login/>
      <SessionMaker/>
    </div>
  );
}

export default App;
