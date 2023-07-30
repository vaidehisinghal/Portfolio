import React from 'react'
import './projects.css'
import {proj} from '../../assests/data'

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>My Projects</h2>

      <div className="container projects__container">
        {
          proj.map(({id,image,title,github,demo}) => {
            return(
              <article key={id}className="projects__item">
                <div className="projects__item-img">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="projects__item-cta">
                <a href={github} className='btn' target="_blank" rel= "noopener noreferrer">Github</a>
                <a href={demo} className='btn btn-primary' target="_blank" rel= "noopener noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects
