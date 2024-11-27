import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div id='nav'>
      <div id='nav-logo'>
        <img src="https://www.zidio.in/assets/images/home-1/zidio%20(1).png" alt="" />
      </div>
      <div id='nav-links'>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact</a></li>
            <li><i class="fa-solid fa-magnifying-glass"></i></li>
        </ul>
        <button type="button">Get A Quote</button>
      </div>
    </div>
  )
}

export default Navbar
