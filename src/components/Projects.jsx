import './styles/Projects.css'
import ProjectCard from "./ProjectCard"

const Projects = () => {
  return (
    <section className="projects__section" id="projects">
        <h2 className="projects__section_title">Proyectos</h2>
        <div className="projects__container">

            <ProjectCard 
              title='Pokédex' 
              imgProject = '/pokeApp.png'
              descriptionProject='Este proyecto combina la información detallada de la extensa base de datos de Pokémon con una interfaz de usuario amigable, brindándote una experiencia completa y divertida.'
              technologies={["React","Api","Html","JavaScript","Css"]}
              linkDeploy='https://poke-api-bruno.netlify.app/#/'
              linkCode='https://github.com/Brunopradoguevara/pokeApi-react'
            />
            <ProjectCard 
              title='Sistema de gestión de usuarios' 
              imgProject = '/registroDeUsuarios.png'
              descriptionProject='El sistema proporciona una serie de funciones fundamentales que mejoran la experiencia de registro y gestión de usuarios: registro de usuarios intuitivo, eliminación de usuarios, actualización de datos de usuario.'
              technologies={["React","Api","Html","JavaScript","Css"]}
              linkDeploy='https://contact-book-bruno.netlify.app/'
              linkCode='https://github.com/Brunopradoguevara/crud-users'
            />
            <ProjectCard 
              title='Explorador de Dimensiones de Rick and Morty' 
              imgProject = '/rickAndMorty.png'
              descriptionProject='Con esta aplicación web, podrás explorar las fascinantes dimensiones que Rick y Morty han visitado a lo largo de sus viajes.(Información extraída de un API pública.)'
              technologies={["React","Api","Html","JavaScript","Css"]}
              linkDeploy='https://rick-and-morty-api-bruno.netlify.app/'
              linkCode='https://github.com/Brunopradoguevara/ricknMortyApi'
            />
            <ProjectCard 
              title='ClimaYa - Datos Meteorológicos' 
              imgProject = '/weatherApp.png'
              descriptionProject='Aplicación web que te brinda acceso instantáneo a la información meteorológica actualizada en tiempo real de cualquier ciudad del mundo.'
              technologies={["React","Api","Html","TypeScript","Tailwind Css"]}
              linkDeploy='https://weather-app-bruno.netlify.app/'
              linkCode='https://github.com/Brunopradoguevara/weatherApp-ts'
            />
             <ProjectCard 
              title='Galleta de la fortuna' 
              imgProject = '/galletaDeLaFortuna.png'
              descriptionProject='Este proyecto fue creado con la idea de brindarte un toque de diversión y sabiduría en cada clic.'
              technologies={["React","Html","JavaScript","Tailwind Css"]}
              linkDeploy='https://fortune-cookie-brunoprado.netlify.app/'
              linkCode='https://github.com/Brunopradoguevara/fortune-cookie-ts'
            />
            <ProjectCard 
              title='Tienda academlo' 
              imgProject = '/academloShop.png'
              descriptionProject=' Tienda academlo es una experiencia de compra en línea diseñada para los amantes de la moda y las tendencias. Puedes explorar una amplia gama de prendas de vestir de alta calidad y estilo, todo desde la comodidad de tu hogar.'
              technologies={["Html","JavaScript","Css"]}
              linkDeploy='https://ecommercebruno.netlify.app/'
              linkCode='https://github.com/Brunopradoguevara/my-first-ecommerce'
            />
           
        </div>
    </section>
  )
}

export default Projects