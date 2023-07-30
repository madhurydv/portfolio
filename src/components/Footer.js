import "./Footerstyles.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{ color: "#fff", marginRight: "-50px" }}
            ></FaHome>
            <div>
              <p>104,Sheetal Paradise Phase II</p>
              <p>Ayodhya Extension,Bhopal 462022</p>
            </div>
          </div>
          <div className="phone">
            <FaPhone
              size={20}
              style={{ color: "#fff", marginRight: "-50px" }}
            ></FaPhone>
            <h4>+91-7024025625</h4>
          </div>
          <div className="email">
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "-50px" }}
            ></FaMailBulk>
            <h4>madhury571@gmail.com</h4>
          </div>
        </div>

        <div className="right">
          <h4>My Socials</h4>
          <ul className="socials">
            <li>
              <a href="https://www.instagram.com/mad_fkn_hur/">
                <FaInstagram size={30} style={{ color: "#fff" }}></FaInstagram>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Mad_fkn_hur">
                <FaTwitter size={30} style={{ color: "#fff" }}></FaTwitter>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/madhurydv/">
                <FaLinkedin size={30} style={{ color: "#fff" }}></FaLinkedin>
              </a>
            </li>
            <li>
              <a href="https://github.com/madhurydv">
                <FaGithub size={30} style={{ color: "#fff" }}></FaGithub>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
