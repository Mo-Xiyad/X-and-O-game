import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <div id="enter" className="h-screen w-screen bg-primary">
      <Routes>
        {routes.map(([path, Element]) => (
          <Route path={path} element={<Element />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
