import './styles/Navbar.css'
import DarkMode from "./DarkMode"
import { useState } from 'react'

const Navbar = ({isLightMode,setIsLightMode}) => {
  const [isActive, setisActive] = useState(false)
  const handleClick = ()=>{
    setisActive(!isActive);
  }
  const closeNav = (e)=>{
    if(isActive){
      setisActive(false);
      e.stopPropagation()
    }
  }
  return (
    <nav className="nav">
        <div className="nav__logo__container">
       {/*  <h2 className="nav__title"><span className="nav__title_decoration">&lt;</span> Portafolio <span className="nav__title_decoration">/&gt;</span></h2> */}
       <img className='nav__logo' src="./logo.png" alt="logo" />
        </div>
        <div className='nav__bars' onClick={handleClick}>
          <div className="nav__bars_line"></div>
          <div className="nav__bars_line"></div>
          <div className="nav__bars_line"></div>
        </div>
        <div className={`nav__navigation ${isActive? 'nav__navigation-active': ''}`} onClick={closeNav}>
            <ul className={`nav__list ${isActive? 'nav__list-active': ''}`}>
                <li className="nav__item"><a className="nav__list_a" href="#home">Inicio</a></li>
                <li className="nav__item"><a className="nav__list_a" href="#technologies">Tecnologías</a></li>
                <li className="nav__item"><a className="nav__list_a" href="#projects">Proyectos</a></li>
                <li className="nav__item"><a className="nav__list_a" href="#aboutMe">Sobre mí  </a></li>
                <li className="nav__item"><a className="nav__list_a" href="#contactForm">Contáctame  </a></li>
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