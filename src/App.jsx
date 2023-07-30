import React from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Experience from './components/Experience/Experience'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'


const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
