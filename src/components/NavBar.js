import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavBar.css'
function NavBar() {
  return (
    <div className="navBar">
      <ul className="navBar__navLinks">
        <NavLink to={'/create-blog'} className="navBar__link">create blog</NavLink>
        <NavLink to={'/view-blogs'} className="navBar__link">view blogs</NavLink>
        <NavLink to={'/contact'} className="navBar__link">contact</NavLink>
      </ul>
    </div>
  )
}

export default NavBar