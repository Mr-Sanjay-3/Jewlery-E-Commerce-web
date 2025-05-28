import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <NavLink to="/" className="logo" onClick={closeMenu}>
            Sparkelina
          </NavLink>
        </div>
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" end className="nav-link" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/items" className="nav-link" onClick={closeMenu}>
            Items
          </NavLink>
          <NavLink to="/shop" className="nav-link" onClick={closeMenu}>
            OnlineShop
          </NavLink>
          <Link to='https://sanjay-kumar-web.vercel.app' 
          rel= "noreferrer" 
          onClick ={closeMenu}
          
          >Connect With Me </Link>
        </div>
       
      </nav>
      <nav className='Snavbar'>
      <div className="SNav-container">
       <li > <NavLink to="/" end className="SLink"  onClick={closeMenu}>
            Home
          </NavLink></li>
          <li>  <NavLink to="/about" className="SLink"  onClick={closeMenu}>
            About
          </NavLink></li>
          <li> <NavLink to="/items" className="SLink"  onClick={closeMenu}>
           Collections
          </NavLink></li>
          <li>
              <NavLink to="/shop" className="SLink"  onClick={closeMenu}>
            OnlineShop
          </NavLink></li>
        </div>
      </nav>
     
    </>
  );
};

export default Navbar;