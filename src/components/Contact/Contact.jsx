import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {FaLinkedinIn} from 'react-icons/fa'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form= useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_rec7lno', 'template_gvnmi1a', form.current, 'YwtKeidLYCodsKREpV')
    e.target.reset();
  };  
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="conatct__option-icon"/>
            <h4>Email</h4>
            <h5>vaidehi1505@gmail.com</h5>
            <a href="mailto:vaidehi1505@gmail.com" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <FaLinkedinIn className="conatct__option-icon"/>
            <h4>LinkedIn</h4>
            <h5>Vaidehi Singhal</h5>
            <a href="https://www.linkedin.com/in/vaidehi-singhal/" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Enter your full name' required />
          <input type="email" name="email" placeholder="janedoe@email.com" required />
          <textarea name="message" rows="7" placeholder='Your message here' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
