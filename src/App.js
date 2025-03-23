import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  // Correct path to Navbar
import Home from "./pages/Home";          // Correct path to Home
import About from "./components/About";   // Correct path to About
import Projects from "./components/Projects"; // Correct path to Projects
import Contact from "./components/Contact";  // Correct path to Contact
import "./App.css";  // Make sure App.css is correctly styled and exists

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
