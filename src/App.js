import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route } from "react-router-dom";
import React from 'react';
import './style.css';
import './App.css';
import Navbar from './Component/Navbar';
import Home from "./Component/Home";
import Skills from "./Component/Skills";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/skills" Component={Skills} />
        <Route exact path="/projects" Component={Projects} />
        <Route exact path="/contact" Component={Contact} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
