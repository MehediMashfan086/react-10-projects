import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div>
        <nav>
            <div className='logo'>
                <img src="/images/brand_logo.png" alt="" />
            </div>
            <ul className='menu-items'>
                <li>MENU</li>
                <li>LOCATION</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>

            <button>Login</button>
        </nav>
    </div>
  )
}

export default Navbar
