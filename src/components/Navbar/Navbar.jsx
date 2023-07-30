import React from 'react'
import './navbar.css'
import {HiOutlineHome} from 'react-icons/hi'
import {BiUser} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {MdWorkOutline} from 'react-icons/md'
import {AiOutlineMail} from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {
  const [activeNow, setActiveNow]= useState('#home')
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNow('#home')} className={activeNow==='#home'? 'active':''}><HiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNow('#about')} className={activeNow==='#about'? 'active':''}><BiUser/></a>
      <a href="#exp" onClick={() => setActiveNow('#exp')} className={activeNow==='#exp'? 'active':''}><BiBook/></a>
      <a href="#projects" onClick={() => setActiveNow('#projects')} className={activeNow==='#projects'? 'active':''}><MdWorkOutline/></a>
      <a href="#contact" onClick={() => setActiveNow('#contact')} className={activeNow==='#contact'? 'active':''}><AiOutlineMail/></a>
    </nav>
  )
}

export default Navbar
