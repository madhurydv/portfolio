import "./Footerstyles.css";
import React from 'react'
import {FaHome,FaPhone,FaMailBulk,FaInstagram,FaLinkedin,FaTwitter,FaGithub} from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}></FaHome>
                <div>
                    <p>104,Sheetal Paradise Phase II</p>
                    <p>Ayodhya Extension,Bhopal 462022</p>
                </div>
            </div>
            <div className="phone">
               <h4> 
                <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}></FaPhone>
                +91-7024025625
                </h4>
            </div>
            <div className="email">
               <h4> 
                <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}></FaMailBulk>
                madhury571@gmail.com
                </h4>
            </div>
        </div>

        <div className="right">
            <h4>My Socials</h4>
            <ul className="socials">
            <li><a href="https://www.instagram.com/mad_fkn_hur/"><FaInstagram size={20} style={{color:"#fff",marginRight:"2rem"}}></FaInstagram></a></li>
            <li><a href="https://twitter.com/Mad_fkn_hur"><FaTwitter size={20} style={{color:"#fff",marginRight:"2rem"}}></FaTwitter></a></li>
            <li><a href="https://www.linkedin.com/in/madhur-yadav-6s2002"><FaLinkedin size={20} style={{color:"#fff",marginRight:"2rem"}}></FaLinkedin></a></li>
            <li><a href="https://github.com/madhurydv"><FaGithub size={20} style={{color:"#fff",marginRight:"2rem"}}></FaGithub></a></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
