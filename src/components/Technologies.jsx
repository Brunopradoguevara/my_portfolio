import './styles/Technologies.css'
const Technologies = () => {
  return (
    <article className="technologies" id='technologies'>
        <h3 className="technologies__title">Tecnologías:</h3>
        <ul className="technologies__list">
            <li className="technology__item"><img src="/HTML5.png" alt="image HTML5" className="technology__item_img" /> <h4 className='technology__item_title'>HTML</h4></li>
            <li className="technology__item"><img src="/CSS.png" alt="image CSS" className="technology__item_img" /> <h4 className='technology__item_title'>CSS</h4>   </li>
            <li className="technology__item"><img src="/Tailwind.png" alt="image Tailwind" className="technology__item_img" /> <h4 className='technology__item_title'>Tailwind</h4> </li>
            <li className="technology__item"><img src="/JavaScript.png" alt="image JavaScript" className="technology__item_img" /> <h4 className='technology__item_title'>JavaScript</h4> </li>
            <li className="technology__item"><img src="/Typescript.png" alt="image TypeScript" className="technology__item_img" /> <h4 className='technology__item_title'>TypeScript</h4> </li>
            <li className="technology__item"><img src="/React.png" alt="image React" className="technology__item_img" /> <h4 className='technology__item_title'>React</h4> </li>
            <li className="technology__item"><img src="/GitHub.png" alt="image GitHub" className="technology__item_img" /> <h4 className='technology__item_title'>GitHub</h4> </li>
            <li className="technology__item"><img src="/Git.png" alt="image Git" className="technology__item_img" /> <h4 className='technology__item_title'>Git</h4> </li>
        </ul>
    </article>
  )
}

export default Technologies