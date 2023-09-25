
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__farewell__container">
            <p className="footer__farewell">Gracias por revisar mi portafolio.</p>
            <p className="footer__farewell">No dudes en contactarme para cualquier propuesta de trabajo.</p>
        </div>
        <div className="footer__contact_container">
            <h3 className="footer__contact_title">Contactame</h3>
            <ul className="footer__contact_list">
              
              <li className="footer__contact_item"><a target="_blank" href="https://www.linkedin.com/in/bruno-abraham-prado-guevara-6ab487212/" className="footer__contact_a"><i className='bx bxl-linkedin'></i></a></li>

              <li className="footer__contact_item"><a target="_blank" href="https://github.com/Brunopradoguevara" className="footer__contact_a"><i className='bx bxl-github' ></i></a></li>

              <li className="footer__contact_item"><a target="_blank" href="mailto:brunoabraham98@hotmail.com" className="footer__contact_a"><i class='bx bx-envelope'></i></a></li>
          </ul>
        </div>
    </footer>
  )
}

export default Footer