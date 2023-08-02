import React from 'react'
import './experience.css'
import {skills} from '../../assests/data'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {FaLaptopCode} from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='exp'>
      <h5>Source of my knowledge</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="work__experience">
          <h3>Work Experience</h3>
          <div className="experience__content">
          <article className="experience__details">
              <FaLaptopCode className='experience__details-icon'/>
              <div>
                <h4>JPMoragn Chase & Co.</h4>
                <small className='text-light'>Software Development Intern</small>
              </div>
              
            </article>
            <article className="experience__details">
              <FaLaptopCode className='experience__details-icon'/>
              <div>
                <h4>Hyphio Pvt. Ltd.</h4>
                <small className='text-light'>Unity Development Intern</small>
              </div>
              
            </article>
            <article className="experience__details">
              <FaLaptopCode className='experience__details-icon'/>
              <div>
                <h4>Sudhir Road Carriers</h4>
                <small className='text-light'>Frontend Web Development Intern</small>
              </div>
              
            </article>
          </div>
        </div>
        <div className="skills">
          <h3>My Skills</h3>
          <div className="skills__container">
          {skills.map(({title,percentage},index) => {
            return(
                <div className="progress__box" key={index}>
                    <div className="progress__circle">
                        <CircularProgressbar strokeWidth={7.5} text={`${percentage}%`} value={percentage}/>
                    </div>

                    <h4 className="skills__title">{title}</h4>
                </div>
            );
          })}
          </div>
          </div>
      </div>
    </section>
  )
}

export default Experience
