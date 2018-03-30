import React from 'react'
import Link from 'gatsby-link'
import Headroom from 'react-headroom'

import logo from '../assets/imgs/logo.png'

const Navbar = props => (
  <Headroom>
    {/* Header */}
    <header id="header" className="header">
      <h1>
        <a href="/">
          <img src={logo} alt="CompuExpress US Logo" className="header--logo" />
        </a>
      </h1>
      <nav>
        <a href="#menu" onTouchTap={props.toggleNav}>
          Menu
        </a>
      </nav>
    </header>
  </Headroom>
)

export default Navbar
