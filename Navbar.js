import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import tour from '../media/tourlog.png'

const Navbar = ({ handleSearch, showSearchBar  }) => {
  return (
    <nav className='NavbarItems'>
      <Link to='/' className='navbar-logo'>Tour<span>Buddy</span></Link>
      <ul className='nav-menu'>
        <li>
         <Link to='/' className='nav-links'>
          <i class="fa-solid fa-house-user"></i>
          Home</Link>
        </li>
        <li>
         <Link to='/states' className='nav-links'>
          <i class="fa-solid fa-circle-info"></i>
          About</Link>
        </li>
        {/* <li>
         <Link to='' className='nav-links'>
          <i class="fa-solid fa-briefcase"></i>
          Service</Link>
        </li> */}
        <li>
         <Link to='' className='nav-links'>
          <i class="fa-solid fa-address-book"></i>
          Contact</Link>
        </li>
      </ul>
      {showSearchBar && (
        <div className='searchbar'>
          <input type='text' placeholder='Search' onChange={handleSearch} />
        </div>
      )}
    </nav>
  )
}

export default Navbar;
