import React from 'react';
import {Route,Routes} from "react-router-dom";
import './index.css';
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import CodingSection from "./routes/CodingSection";
import Contact from "./routes/Contact";
function App() {
  return (
    <> 
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/CodingSection" element={<CodingSection/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  );
}
// HAHAHAHHAHHAHHAHAH
export default App;
