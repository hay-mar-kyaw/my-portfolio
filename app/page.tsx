import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Qualifications from './components/Qualifications'
import AboutMe from './components/AboutMe'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import GetInTouch from './components/GetInTouch'
import Footer from './components/Footer'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Qualifications />
      <SkillsSection />
      <ProjectsSection />
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default page