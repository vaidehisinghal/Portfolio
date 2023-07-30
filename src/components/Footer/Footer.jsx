import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#home" className='footer__logo'>Vaidehi Singhal</a>

      <ul className='perma__list'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#exp">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/vaidehi-singhal/" target='_blank' rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/vaidehisinghal" target='_blank' rel="noopener noreferrer"><BsGithub/></a>
        <a href="https://twitter.com/vaidehisinghal_" target='_blank' rel="noopener noreferrer"><FaTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Vaidehi Singhal. All rights reserved.</small><br/>
        <small>Made with ReactJS,EmailJS</small>
      </div>
    </footer>
  )
}

export default Footer
