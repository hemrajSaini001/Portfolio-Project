import React from 'react'
import { useRef } from 'react'
import './Contact.css' 
import Linkdin from '../assets/linkedin.svg'
import Github from '../assets/github.svg'
import  Instagram from'../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import emailjs from '@emailjs/browser';

function Contact() {
   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xtj13xi', 'template_klglati', form.current, {
        publicKey: 'k9qj5L5f57QkyziEb',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
     <section id='contact'> 
     <div id='social'>
        <h1 className='socialTitle'>Socials</h1>
        <p className='socialDesc'>Here you can connect with me on my social media </p>
    <div className='socialImgs'>
       <a href='https://www.linkedin.com/feed /'><img src={Linkdin } alt='Linkdin' className='socialImg'/></a>
      <a href='https://github.com/hemrajSaini001'><img src={Github } alt='Github' className='socialImg'/></a>
      <a href='https://www.instagram.com/offical__raj_moriya01?igsh=dmdrOWM2b3RuMm1r'><img src={Instagram } alt='Instagram' className='socialImg'/></a>
      <a href='https://www.facebook.com/profile.php?id=100050541751587&mibextid=ZbWKwL'><img src={facebook } alt='facebook' className='socialImg'/></a>
    </div>
     </div>
          <div id='contactPage'>
        <h1 className='contactTitle'>Contact </h1>
        <span className='contactDesc'>Feel free to contact me</span>

        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name'placeholder='your Name ' name="from_name" required/>
              <input type='email' className='email'placeholder='your Email' name="your_email" required/>
            <textarea className='msg' rows="5" placeholder= 'Your Message' name="message" required ></textarea>
            <button type='submit' value="Send" className='submitBtn' onClick={()=>{alert(" your Form is Submitted.")}}>Submit</button>
        </form>
     </div>

     </section>
  )
}

export default Contact
