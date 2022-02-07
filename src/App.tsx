import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <div className="h-screen w-screen bg-primary font-mono">
      <Routes>
        {routes.map(([path, Element]) => (
          <Route path={path} element={<Element />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
