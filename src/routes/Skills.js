import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import { Skill2 } from '../components/Skill2'
// import { Skillcomp } from '../components/Skillcomp'
const Skills = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="My Skill Set."/>
      <Skill2/>
      {/* <Skillcomp/> */}
      <Footer/>
    </div>
  )
}
export default Skills