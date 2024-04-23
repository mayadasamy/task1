import React from 'react'
import './css/NavBar.css'
import ImgLogo from './images/logo.png'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'



const NavBar = () => {
  return (

    
    <nav  className='navbar'>
        <Link><img src={ImgLogo} alt="Logo" className='logo' to={"/"} /></Link>
        <ul className='links'>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/about"}>About</NavLink></li>
            <li><NavLink to={"/"}>Product</NavLink></li>
            <li><NavLink to={"/contact"}>Contact Us</NavLink></li>
        </ul>
    </nav>


    
  


  )
}

export default NavBar
