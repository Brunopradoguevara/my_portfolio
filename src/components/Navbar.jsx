import './styles/Navbar.css'
import DarkMode from "./DarkMode"
import { useState } from 'react'

const Navbar = ({isLightMode,setIsLightMode}) => {
  const [isActive, setisActive] = useState(false)
  const handleClick = ()=>{
    setisActive(!isActive);
  }
  return (
    <nav className="nav">
        <div className="nav__title__container">
        <h2 className="nav__title"><span className="nav__title_decoration">&lt;</span> Portafolio <span className="nav__title_decoration">/&gt;</span></h2>
        </div>
        <div className='nav__bars' onClick={handleClick}>
          <div className="nav__bars_line"></div>
          <div className="nav__bars_line"></div>
          <div className="nav__bars_line"></div>
        </div>
        <div className={`nav__navigation ${isActive? 'nav__navigation-active': ''}`}>
            <ul className={`nav__list ${isActive? 'nav__list-active': ''}`}>
                <li className="nav__item"><a className="nav__list_a" href="#home">Inicio</a></li>
                <li className="nav__item"><a className="nav__list_a" href="#projects">Proyectos</a></li>
                <li className="nav__item"><a className="nav__list_a" href="#aboutMe">Sobre mí  </a></li>
                <li className="nav__item"><a className="nav__list_a" href="#contactForm">Contactome  </a></li>
            </ul>
            <DarkMode
              isLightMode={isLightMode}
              setIsLightMode={setIsLightMode}
            /> 
        </div>
        
    </nav>
  )
}

export default Navbar