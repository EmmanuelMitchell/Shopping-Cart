import React from 'react'
import './navbar.css'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
         <span className="navbar-item"><Link href="#">Mitchell</Link></span>
    <ul className="navbar-list">
      <li className="navbar-item"><Link to='/'>Store</Link></li>
      <li className="navbar-item"><Link to='/cart'>
        <FaShoppingCart size={30} />
        </Link></li>
    </ul>
  </nav>
  )
}

export default Navbar