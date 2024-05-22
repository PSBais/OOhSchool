// src/App.js
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import MiniDrawer from "./Components/Sidebar/Sidebar";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<MiniDrawer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
