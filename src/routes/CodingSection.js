import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Coding from "../components/Coding"
const CodingSection = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="CODING SECTION." text="My Coding Profiles."/>
      <Coding/>
      <Footer/>
    </div>
  )
}
export default CodingSection
