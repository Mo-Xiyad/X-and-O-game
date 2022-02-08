import React, { useEffect } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { RecoilRoot } from "recoil";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <RecoilRoot>
      <div className="h-screen w-screen bg-primary font-mono">
        <Routes>
          {routes.map(([path, Element], i) => (
            <Route path={path} element={<Element />} key={i} />
          ))}
        </Routes>
      </div>
    </RecoilRoot>
  );
}

export default App;
