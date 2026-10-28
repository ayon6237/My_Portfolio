import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import './App.css'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import About from './Components/About'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
    <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
      
    
  )
}

export default App
