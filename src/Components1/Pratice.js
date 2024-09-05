import React from 'react'
import './Body.css'
import Hire from'../assets/hireme.png'
import react from'../assets/react.svg'
import { Link } from 'react-scroll'

function Body() {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello</span>
            <span className='introText'>  
              I'm<span className='introName'>Hemraj</span>
              <br/>
              web Developer
              </span>
            <p className='introPara'> 
              i am a skilled web developer with exprience in creating visually appealing and user friendly websites.
            </p>
            <Link>
            <button className='btn2'>
                <img src={Hire} alt='img'className='btnImg2'/>
                Hire Me
            </button>
            </Link>
            </div>

        <img src={react} alt='React logo'className='logo2'/>

    </section>
    
  )
}

export default Body
