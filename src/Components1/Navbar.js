import React from 'react'
import  {useState} from 'react'
 import './Navbar.css';
 import logo from '../assets/h logo.png'
 import contactimg from '../assets/contact.png'
 import menu from '../assets/menu.png'
 import { Link } from 'react-scroll'
 

function Navbar() {
  const [showmenu,setshowMenu]=useState(false);
  return (
    <nav className='navbar'>
       <a href='https://www.linkedin.com/feed /'><img src={logo} alt='logo' className='logo'/></a>
        <div  className="nav-links">
          <Link activeclass='active'to='intro'spy={true} smooth={true} offset={-100} duration={500} className='nav-links-iteam'>Home</Link>
          <Link activeclass='active'to='about'spy={true} smooth={true} offset={-100} duration={500} className='nav-links-iteam'>About</Link>
          <Link activeclass='active'to='project'spy={true} smooth={true} offset={-100} duration={500} className='nav-links-iteam'>Project</Link> 
          <Link activeclass='active'to='social'spy={true} smooth={true} offset={-100} duration={500} className='nav-links-iteam'>Social</Link>
          </div>
          <button className='btn' onClick={()=>{            
            document.getElementById('contactPage').scrollIntoView({behaviour:'smooth'});
          }}><img src={contactimg} alt='Contect me' className='btnimg'/>Contact me</button>
         
        
     <img  src={menu}  alt='menu' className='mobmenu' onClick={()=>setshowMenu(!showmenu)}/>
     <div  className="navmenu" style={{display: showmenu? 'flex' :'none'}}>
          <Link activeclass='active'to='intro'spy={true} smooth={true} offset={-100} duration={500} className='Menu-iteam' on onClick={()=>setshowMenu(false)}>Home</Link>
          <Link activeclass='active'to='about'spy={true} smooth={true} offset={-100} duration={500} className='menu-iteam'on onClick={()=>setshowMenu(false)}>About</Link>
          <Link activeclass='active'to='project'spy={true} smooth={true} offset={-100} duration={500} className='Menu-iteam'on onClick={()=>setshowMenu(false)}>Project</Link> 
          <Link activeclass='active'to='social'spy={true} smooth={true} offset={-100} duration={500} className='Menu-iteam'on onClick={()=>setshowMenu(false)}>Social</Link>
         <Link activeclass='active'to='contactPage'spy={true} smooth={true} offset={-100} duration={500} className= 'Menu-iteam'on onClick={()=>setshowMenu(false)}>Contact</Link>
          </div>
    
    </nav>
  
    
    

   
  );
}

export default Navbar
