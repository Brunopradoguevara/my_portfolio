
const Home = () => {
  return (
    <section className="home__section" id="home">
        <div className="home">
          <span className="home__greeting">Hola, soy</span>
          <h1 className="home__my_name">Bruno Prado</h1>
          <p className="home__profesion"><span className="home__profesion_decoration">&lt;</span> Desarrollador Frontend <span className="home__profesion_decoration">/&gt;</span></p>
          <p className="home__description">Especializado en la creación de aplicaciones web con react. Siempre buscando ofrecer al usuario una experiencia cómoda, fiable y atractiva. </p>
          <ul className="home__contact_list">
            <li className="home__contact_item"><a target="_blanck" href="https://www.linkedin.com/in/bruno-abraham-prado-guevara-6ab487212/" className="home__contact_a"><i className='bx bxl-linkedin'></i></a></li>

            <li className="home__contact_item"><a target="_blanck" href="https://github.com/Brunopradoguevara" className="home__contact_a"><i className='bx bxl-github' ></i></a></li>

            <li className="home__contact_item"><a target="_blanck" href="mailto:brunoabraham98@hotmail.com"  className="home__contact_a"><i class='bx bx-envelope'></i></a></li>
          </ul>
          <article className="technologies">
            <h3 className="technologies__title">Tecnologías:</h3>
            <ul className="technologies__list">
              <li className="technology__item"><img src="/HTML5.png" alt="image HTML5" className="technology__item_img" /></li>
              <li className="technology__item"><img src="/CSS.png" alt="image CSS" className="technology__item_img" /></li>
              <li className="technology__item"><img src="/JavaScript.png" alt="image JavaScript" className="technology__item_img" /></li>
              <li className="technology__item"><img src="/React.png" alt="image React" className="technology__item_img" /></li>
              <li className="technology__item"><img src="/Git.png" alt="image Git" className="technology__item_img" /></li>
              <li className="technology__item"><img src="/GitHub.png" alt="image GitHub" className="technology__item_img" /></li>
            </ul>
          </article>
        </div>
        <div className="home__avatar">
            <img className="avatar_img" src="myAvatar1.png" alt="" />
        </div>
    </section>
  )
}

export default Home