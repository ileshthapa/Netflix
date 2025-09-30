import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Components/Home";


const App = () => {
  return (

      <Routes> 
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>

  ); 
};

export default App;
