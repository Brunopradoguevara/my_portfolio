
const Navbar = () => {
  return (
    <nav className="nav">
        <div className="nav__title__container">
        <h2 className="nav__title"><span className="nav__title_decoration">&lt;</span> Portafolio <span className="nav__title_decoration">/&gt;</span></h2>
        </div>
        <div className="nav__navigation">
            <ul className="nav__list">
                <li className="nav__item"><a className="nav__list_a" href="#home">Inicio</a></li>
                <li className="nav__item"><a className="nav__list_a" href="#projects">Proyectos</a></li>
                <li className="nav__item"><a className="nav__list_a" href="#aboutMe">Sobre mí  </a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar