import React from 'react'
import "./navbar.scss"

import header from "../../Assets/headerimg.png"
import  {HashLink as Link}from "react-router-hash-link"

const navbar = () => {
  return (
    <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3  border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg className="bi me-2" width="40" height="32"></svg>
        <div className='logo'>
        <img src={header} alt='header' />
      </div>
      </a>

      <ul className="nav nav-pills">
      <Link to="/" style={{ textDecoration: "none" }} >
          <li className='nav-items'>
            <span>Home</span>
          </li>
        </Link>
        <Link to="#work" style={{ textDecoration: "none" }}>
          <li className='nav-items'>
            <span>Work</span>
          </li>
        </Link>
        <Link to="#services" style={{ textDecoration: "none" }}>
          <li className='nav-items' >
            <span>Services</span>
          </li>
        </Link>
        <Link to="#about" style={{ textDecoration: "none" }} >
          <li className='nav-items'>
            <span>About me</span>
          </li>
        </Link>
      </ul>
    </header>
  </div>
  )
}

export default navbar