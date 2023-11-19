import { useRef } from 'react';
import './styles/ContactForm.css'
import emailjs from '@emailjs/browser';
const ContactForm = () => {
  const refForm = useRef();
    const handleSubnit = (e) =>{
        e.preventDefault()
        const service_ID = 'service_lb3oe6h'
        const tamble_ID = 'template_07a4uci'
        const ApiKey = 'NPUAfQdTTgbqYO1Q7'
        emailjs.sendForm(service_ID,tamble_ID,refForm.current,ApiKey)
        .then(res=>{
          console.log(res.text); 
          refForm.current.reset();
         })
        .catch(err =>console.log(err)); 

    }
  return (
    <div id='contactForm' className="contactForm">
        <h2 className="contactForm__title">Contáctame</h2>
        <form className="contactForm__form" ref={refForm} onSubmit={handleSubnit}>
            <label className="contactForm__label" htmlFor="">Nombre</label>
            <input name='from_name' className="contactForm__input"  type="text" placeholder="Nombre" required/>
            <label className="contactForm__label" htmlFor="">Correro</label>
            <input name='from_email' className="contactForm__input" type="email" placeholder="usuario@gmail.com" required/>
            <label  className="contactForm__label" htmlFor="">Mensaje</label>
            <textarea name='message' className="contactForm__textarea" required cols="30" rows="10" placeholder="Deja tu mensaje aqui"></textarea>
            <button className="contactForm__btn">Enviar</button>
        </form>
    </div>
  )
}

export default ContactForm