import React,{useRef} from 'react'
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import emailjs from 'emailjs-com'

import './contacts.css'
const Contacts = () => {
    const form = useRef();
    const sendEmail = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_i6ovjtp','template_102zpfe', form.current, 'PLrrIKSQFZBWqo2jj')
        .then((result)=>{
            console.log(result.text);
        },(error)=>{
            console.log(error.text);
        });
    }
  return (
    <section id='contacts' className='header__section'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
            <div className="contact__options">
                <article className="contact__option">
                    <MdOutlineEmail className='contact__option-icon'/>
                    <h4>Email</h4>
                    <h5>asmbalasagdheve0110@gmail.com</h5>
                    <a href='mailto:asmbalasagdheve0110@gmail.com' target='_blank'>Send a message</a>
                </article>

                <article className="contact__option">
                    <RiMessengerLine className='contact__option-icon'/>
                    <h4>Belay Tutorials</h4>
                    <h5>asmbalasagdheve0110@gmail.com</h5>
                    <a href='https://github.com' target='_blank'>Send a message</a>
                </article>
                <article className="contact__option">
                    <BsWhatsapp className='contact__option-icon'/>
                    <h4>WhatsApp</h4>
                    <h5>+251999999</h5>
                    <a href='https://api.whatsapp.com/send?phone=+251999999' target='_blank'>Send a message</a>
                </article>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name = "name" placeholder='Your Full Name' required/>
                <input type="email" name = "email" placeholder='Your Email' required/>
                <textarea name="message" rows="7" placeholder= "Your Message" required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contacts