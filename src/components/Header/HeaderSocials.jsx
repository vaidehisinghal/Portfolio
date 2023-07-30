import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'> 
      <a href="https://www.linkedin.com/in/vaidehi-singhal/" target='_blank' rel="noopener noreferrer"><BsLinkedin/></a>
      <a href="https://github.com/vaidehisinghal" target='_blank' rel="noopener noreferrer"><BsGithub/></a>
      <a href="https://twitter.com/vaidehisinghal_" target='_blank' rel="noopener noreferrer"><FaTwitter/></a>
    </div>
  )
}

export default HeaderSocials
