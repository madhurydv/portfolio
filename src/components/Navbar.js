import "./NavbarStyles.css"
import React,{useState} from 'react'
//this is importing an icon from react icons here fa is category and bars is name.
import {FaBars,FaTimes} from "react-icons/fa"
import {Link} from "react-router-dom"
const Navbar = () => {

    //Function to toggle hamburger menu
    const [click,setClick]=useState(false);
    const handleClick = () =>setClick(!click);

    //for changing color of navbar when page is scrolled
    const [color,setColor] = useState(false);
    const changeColor=()=>{
      if(window.scrollY>=100)
      {
        setColor(true);
      }
      else
      {
        setColor(false);
      }
    }
    window.addEventListener("scroll",changeColor);



  return (
    <div className={color?"header header-bg":"header"}>
      <Link to={"/"}>
        <h1>Madhur.</h1>
      </Link>
      <ul className={click?"nav-menu active":"nav-menu"}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/project">Projects</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {/* If "Click" is true it'll show the closing icon else it'll show the hamburger icon */}
        {click?(<FaTimes size={20} style={{color:"#fff"}}/>):(<FaBars size={20} style={{color:"#fff"}}/>)}
      </div>
    </div>
  )
}

export default Navbar
