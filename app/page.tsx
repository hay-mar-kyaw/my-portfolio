import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Qualifications from './components/Qualifications'
import AboutMe from './components/AboutMe'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Qualifications />
    </div>
  )
}

export default page