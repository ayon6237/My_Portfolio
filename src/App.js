import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import './App.css'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
const App = () => {
  return (
    <>
    <Navbar />
      <Hero />
      
      <Projects />
      <Skills />
      <Contact />
    </>
      
    
  )
}

export default App
