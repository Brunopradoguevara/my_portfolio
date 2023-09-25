
import ProjectCard from "./ProjectCard"

const Projects = () => {
  return (
    <section className="projects__section" id="projects">
        <h2 className="projects__section_title">Proyectos</h2>
        <div className="projects__container">

            <ProjectCard 
              title='Sistema de gestión de usuarios' 
              imgProject = '/registroDeUsuarios.png'
              descriptionProject='El sistema proporciona una serie de funciones fundamentales que mejoran la experiencia de registro y gestión de usuarios: registro de usuarios intuitivo, liminación de usuarios, actualización de datos de usuario.'
              technologies={["React","Api","Html","JavaScript","Css"]}
              linkDeploy='https://contact-book-bruno.netlify.app/'
              linkCode='https://github.com/Brunopradoguevara/crud-users'
            />
            <ProjectCard 
              title='Explorador de Dimensiones de Rick and Morty' 
              imgProject = '/registroDeUsuarios.png'
              descriptionProject='Embarcarte en una aventura interdimensional inspirada en la popular serie de televisión "Rick and Morty". Con esta aplicación web, podrás explorar las fascinantes dimensiones que Rick y Morty han visitado a lo largo de sus viajes.'
              technologies={["React","Api","Html","JavaScript","Css"]}
              linkDeploy='https://rick-and-morty-api-bruno.netlify.app/'
              linkCode='https://github.com/Brunopradoguevara/ricknMortyApi'
            />
            <ProjectCard 
              title='ClimaYa - Datos Meteorológicos Instantáneos' 
              imgProject = '/registroDeUsuarios.png'
              descriptionProject='Aplicación web que te brinda acceso instantáneo a la información meteorológica actualizada en tiempo real de cualquier ciudad del mundo. Simplemente ingresa el nombre de la ciudad que te interesa y descubre datos esenciales sobre las condiciones climáticas.'
              technologies={["React","Api","Html","JavaScript","Css"]}
              linkDeploy='https://weather-app-bruno.netlify.app/'
              linkCode='https://github.com/Brunopradoguevara/weatherApp'
            />
            <ProjectCard 
              title='Tieda academlo' 
              imgProject = '/registroDeUsuarios.png'
              descriptionProject=' Tieda academlo es una experiencia de compra en línea diseñada para los amantes de la moda y las tendencias. Puedes explorar una amplia gama de prendas de vestir de alta calidad y estilo, todo desde la comodidad de tu hogar.'
              technologies={["Html","JavaScript","Css"]}
              linkDeploy='https://ecommercebruno.netlify.app/'
              linkCode='https://github.com/Brunopradoguevara/my-first-ecommerce'
            />

            
        </div>
    </section>
  )
}

export default Projects