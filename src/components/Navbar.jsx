import React, { useEffect, useState } from 'react';
import './style/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../assests/logo-removebg-preview.png';
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 600 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const[mobileMenu, setmobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setmobileMenu(false) : setmobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav': ''}`}>
    <Link to="/" ><img className="logo" src={logo} alt='' /></Link>
      <ul className={mobileMenu? '': 'hide-mobile-menu'}>
      <li><Link className="btn"to="/">Home</Link></li>
      <li><Link className="btn"to="/About">About Us</Link></li>
      <li><Link className="btn"to="/SchoolLife">School LIfe</Link></li>
      <li><Link className="btn" to="/Contact">Contact Us</Link></li>
      <li><Link className="btn" to="/Enquire">Enquire Now</Link></li>
      </ul>
      <FontAwesomeIcon icon={faBars} className='fa-Bars' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar