import { useState } from "react";
import Home from "./components/Home";
import './App.css';
import { Routes, Route } from "react-router-dom";
//Some code missing here!!!
import Navbar from "./components/Navbar";
import Add from "./components/Add";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />

      </Routes>
    </>
  );
}

export default App;
