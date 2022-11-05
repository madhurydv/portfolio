import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Coding from '../components/Coding'
import Work from '../components/Work'
const Projects = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="CODING SECTION." text="My Coding Profiles."/>
      <Work/>
      <Coding/>
      <Footer/>
    </div>
  )
}

export default Projects
