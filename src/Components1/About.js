import React from 'react'
import './About.css';
import html from'../assets/HTML5_Badge.svg'
import css from'../assets/css-3.svg'
import javascript from'../assets/javascript.svg'
import bootstrip from'../assets/bootstrap.png'
import react1 from '../assets/download.png'
import C from'../assets/C.png'
import Cx from'../assets/c++.png'
import Dsa from '../assets/dsa.jpeg'

function About() {
  return (
    <section id="about">
        <span className='aboutTitle'> What i Know</span>
        <span className='aboutDesc'>I am a Skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.i have a strong understanding of  design and keen eye for detail.i am proficient in HTML,CSS,and JavaScript.</span>
       
        <div className='aboutBars'>
            <div className='aboutBar'>
                <img src={ html} alt=" "className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>HTML</h2>
                    <p>Hypertext Markup Language</p>
                </div>
            </div>

             <div className='aboutBar'>
                <img src={ css} alt=" "className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>CSS</h2>
                    <p>Cascading Style Sheets</p>
                </div>
            </div>

              <div className='aboutBar'>
                <img src={javascript} alt=" "className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>JS</h2>
                    <p>JavaScript</p>
                </div>
            </div>

            <div className='aboutBar'>
                <img src={bootstrip} alt=" "className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>BS</h2>
                    <p>BootStrap</p>
                </div>
            </div>

            <div className='aboutBar'>
                <img src={react1} alt=" "className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>REACT</h2>
                    <p>React</p>
                </div>
            </div>
        
            <div className='aboutBar'>
                <img src={C} alt=" "className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>C</h2>
                    <p>Computer programming language</p>
                </div>
            </div>
        
            <div className='aboutBar'>
                <img src={Cx} alt=" "className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>C++</h2>
                    <p>Computer programming language</p>
                </div>
            </div>
        
            <div className='aboutBar'>
                <img src={Dsa} alt=" "className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>DSA</h2>
                    <p>Data Structure and Algorithms</p>
                </div>
            </div>
        </div>

         
       </section>
  )
}

export default About
