import "./AboutContentStyles.css";
import React from 'react'
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am an Engineering Undegrad<br/>At LNCT Bhopal with 8.34 CGPA.<br/>Who enjoys solving problems.</p>
        </div>
        <Link to="/contact">
            <button className="btn">Contact Me.</button>
        </Link>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img className="img" alt="cp" src={require('../assets/cp.jpg')}></img>
                </div>
                <div className="img-stack bottom">
                    <img className="img" alt="react" src={require('../assets/react.png')}></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
