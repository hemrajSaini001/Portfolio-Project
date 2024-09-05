import React from 'react'
import './banner.css'
import  Banner from '../assets/project.jpg'

function Project() {
  return (
    <section id='project'>
        <h2 className='projectTitle'>My Projects</h2>
        <span className='projectDesc'>Here are my projects</span>

        <div className='project-item'>
            <div className='item-details'>
                <p className='p1'>Project-1</p>
                <p className='p2'>TechStack:-HTML and CSS</p>
            </div>
            <a href='#'><img src={Banner} alt='project-1' className='projectImg'/></a>
        </div>
         <div className='project-item'>
            <div className='item-details'>
                <p className='p1'>Project-2</p>
                <p className='p2'>TechStack:-HTML,CSS and Bootstrap </p>
            </div>
            <a href='#'><img src={Banner} alt='project-2' className='projectImg'/></a>
        </div>
      </section>

  )
}

export default Project
