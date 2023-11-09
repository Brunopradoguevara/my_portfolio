
import { useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import ContactForm from './components/ContactForm'

function App() {
  const [isLightMode, setIsLightMode] = useState(false)
  return (
   <div className={`portafolio ${isLightMode? 'lightMode': ''}`}>
    <header>
      <Navbar
        isLightMode={isLightMode}
        setIsLightMode={setIsLightMode}
      />
    </header>
    <main>
      <Home/> 
      <Projects/>
      <AboutMe/>
      <ContactForm/>
    </main>
    <Footer/>
   </div>
  )
}

export default App
