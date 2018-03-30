import React from 'react'
import Link from 'gatsby-link'
import Headroom from 'react-headroom'

import github from '../img/github-icon.svg'
import logo from '../assets/imgs/logo.png'

const Navbar = () => (
  <Headroom>
    {/* Header */}
    <header id="header" className="header">
      <h1>
        <a href="/">
          <img src={logo} alt="CompuExpress US Logo" className="header--logo" />
        </a>
      </h1>
      <nav>
        <a href="#menu">Menu</a>
      </nav>
    </header>

    {/* Menu */}
    <nav id="menu">
      <div className="inner">
        <h2>Menu</h2>
        <ul className="links">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="generic.html">Generic</a>
          </li>
          <li>
            <a href="elements.html">Elements</a>
          </li>
          <li>
            <a href="#">Log In</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
        </ul>
        <a href="#" className="close">
          Close
        </a>
      </div>
    </nav>
  </Headroom>
)

export default Navbar
