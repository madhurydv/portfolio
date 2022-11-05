import "./Heroimgstyles.css";
import React from 'react'
import {Link} from "react-router-dom";
const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={require('../assets/bg1.jpg')} alt="IntroImg"/>
      </div>
      <div className="content">
        <p>I am a Programmer.</p>
        <h1>
            React Developer.<br/>Competitive Coder.
        </h1>
        <div> 
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Heroimg
