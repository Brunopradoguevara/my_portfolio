

const ProjectCard = ({title,imgProject,descriptionProject,technologies,linkDeploy,linkCode}) => {
  return (
    <article className="projectCard">
        <header className="projectCard__header">
            <img className="projectCard__img" src={imgProject} alt="" />
        </header>
        <main className="projectCard__main">
            <h2 className="projectCard__title">{title}</h2>
            <p className="projectCard__description">{descriptionProject}</p>
            <ul className="projectCard__list">
                {
                 technologies?.map(tec =>(
                   <li className="projectCard__technology">{tec}</li> 
                 ))
                }
            </ul>
        </main>
        <footer className="projectCard__footer">
            <ul className="projectCard__list_contact">
                <li className="projectCard__contact_item"><a className="projectCard__contact_a" target="blank" href={linkDeploy}>Deploy</a></li>
                <li className="projectCard__contact_item"><a className="projectCard__contact_a" target="blank" href={linkCode}>Codigo</a></li>
            </ul>
        </footer>
    </article>
  )
}

export default ProjectCard