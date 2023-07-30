import React from 'react'
import './about.css'
import ME from '../../assests/me-about.jpeg'
import {IoMdSchool} from 'react-icons/io'
import {BsLadder} from 'react-icons/bs'
import {BsPersonWorkspace} from 'react-icons/bs'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__image">
            <img src={ME} alt="my-profile" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="card">
              <IoMdSchool className='about__icon' />
              <h5>Student</h5>
              <small>Computer Science</small>
            </article>
            <article className="card">
              <BsLadder className='about__icon' />
              <h5>Projects</h5>
              <small>Increasing the list everyday</small>
            </article>
            <article className="card">
              <BsPersonWorkspace className='about__icon' />
              <h5>Work</h5>
              <small>Summer Internships</small>
            </article>
          </div> 
          <p>
            Hi! I am a third year Computer Science Engineering student. I am an avid reader who loves to code. 
            I am increasing my knowledge by developing projects. 
            My interests are not confined to the academic field, I am a trained classical dancer as well. 
            If I had to describe myself in three words, they would be- kind, leader and courageous.
          </p>
            <a href="#contact" className='btn btn-primary'>Let's Connect</a>        
        </div>
      </div>
    </section>
  )
}

export default About
