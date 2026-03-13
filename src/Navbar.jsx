import React from 'react'
import '../src/css/Navbar.css'
const Navbar = () => {
  return (
    <nav>
        <div className='nav-icon'>🌳</div>
        <div className='nav-logo-text'>
            "Green Agra"
            <span>Green City Mission 2030</span>
        </div>
        <ul className='nav-links'>
            <li><a href='#'>Home</a></li>
            <li><a href='#impact'>Initiatives</a></li>
            <li><a href='#'>Lake Restoration</a></li>
            <li><a href='#'>Events</a></li>
        </ul>
        <a className='btn-nav'>Join The Movement</a>
    </nav>
  )
}

export default Navbar