import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Qualifications from './components/Qualifications'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Qualifications />
    </div>
  )
}

export default page