import React from 'react';
import './App.css';
import Enter from './components/Enter'
import { Routes,Route } from 'react-router-dom';
import Game from './components/Game';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Enter />}/>
      <Route path="/" element={<Game />}/>
    </Routes>
  );
}

export default App;
