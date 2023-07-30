import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/me.png'
import HeaderSocials from './HeaderSocials'
import {BsFillArrowDownCircleFill} from 'react-icons/bs'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Vaidehi Singhal</h1>
        <h5 className="text-light">Computer Science Student</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#footer" className='scroll__down'><BsFillArrowDownCircleFill size={30}/></a>
      </div>
    </header>
  )
}

export default Header
