import "./Heroimgstyles.css";
import React from 'react'
import {Link} from "react-router-dom";
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';
const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={require('../assets/bg1.jpg')} alt="IntroImg"/>
      </div>
      <div className="content">
      <Zoom right cascade duration={600}>
          <p>I am a Programmer.</p>
        </Zoom>
      <div className="h1s">
        <h1>
          <Zoom right cascade duration={1200}>
            React Developer.
          </Zoom>
          <br />
          </h1>
          <h1>
          <Zoom right cascade duration={2400}>
            Competitive Coder.
          </Zoom>
        </h1>
        </div>
        <div className="homebtns">  
            <LightSpeed left duration={2800}><Link to="/project" className="btn">Projects</Link></LightSpeed>
            <LightSpeed right duration={2800}><Link to="/contact" className="btn btn-light">Contact</Link></LightSpeed>
        </div>
      </div>
    </div>
  )
}

export default Heroimg
