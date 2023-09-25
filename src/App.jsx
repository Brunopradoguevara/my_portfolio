
import './App.css'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {

  return (
   <div className='portfolio'>
    <header>
      <Navbar/>
    </header>
    <main>
      <Home/> 
      <Projects/>
      <AboutMe/>
    </main>
    <Footer/>
   </div>
  )
}

export default App
