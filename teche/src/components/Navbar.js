import React from 'react'
import '../styles/navbar.css'
function Navbar() {
  return (
    <div>
        <nav>
        <div className="logo">
            <a href="#">Your Logo</a>
        </div>
        <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar