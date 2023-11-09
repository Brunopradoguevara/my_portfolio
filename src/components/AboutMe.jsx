import './styles/AboutMe.css'

const AboutMe = () => {
  return (
    <section className="aboutMe" id="aboutMe">
      <h2 className="aboutMe__title">Sobre mí</h2>
      <article className="aboutMe__card">
        <p className="aboutMe__description">Mi nombre es Bruno Prado, soy un frontend developer ubicado en México. Soy un apasionado de la creación de interfaces web funcionales y estéticas. Sigo expandiendo mi conocimiento constantemente con nuevas tecnologías y herramientas.</p>
        <div className='aboutMe_img_container'>
          <img className='aboutMe_img' src="./image1.svg" alt="" />
        </div>
      </article>
    </section>
  )
}

export default AboutMe