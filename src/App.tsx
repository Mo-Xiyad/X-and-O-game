import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import { routes } from './routes';

function App() {
  return (
    <Routes>
      {routes.map(([path, Element]) =>
        <Route path={path} element={<Element />}/>
      )}
    </Routes>
  );
}

export default App;
