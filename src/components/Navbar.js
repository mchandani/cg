import React from 'react';
import './styles/navbar.css';

const Navbar = () => {
    return(
<nav className="navbar navbar-expand-lg navbar-light bg-white">
  <a className="navbar-brand" href="/">
    <img src="/images/navbar/logo-1.png" className="logo-1" />
  </a>

  <button className="navbar-toggler navbar-button" type="button" data-toggle="collapse"
    data-target="#navbarSupportedContent" aria-controls="navbarNav" aria-expanded="false"
    aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse nav-fill" id="navbarSupportedContent">
    <ul id="nav-list" className="navbar-nav">
      <li className="nav-item nav-option">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item nav-option">
        <a className="nav-link" href="/about">About</a>
      </li>

      <li className="nav-item nav-option">
        <a className="nav-link" href="/mentor-home">Mentor</a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Utilities
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/predictor-mains"> </a>
          <a className="dropdown-item" href="/services">Services</a>
          <a className="dropdown-item" href="/blogs">Blogs</a>
          
        </div>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          College Predictor
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/predictor-mains">JEE Mains</a>
          <a className="dropdown-item" href="/predictor-advanced">JEE Advanced</a>
        </div>
      </li>
      
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dashboard
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/dashboard"> Mentor Dashboard</a>
          <a className="dropdown-item" href="/studentboard">Student Dashboard</a>
        </div>
      </li>
      
      <li className="nav-item nav-option">
        <a className="nav-link" href="/contact">Contact Us</a>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link nav-option dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
         Join Us 
        </a>

        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
         
          <a className="dropdown-item sign-up" href="/auth/login/" style={{marginBottom:"5px"}}>Login</a>
          <a className="dropdown-item sign-up" href="/auth/signup/">Sign Up</a>
        </div>
      </li>
    </ul>
  </div>
</nav>

    );
}

export default Navbar;