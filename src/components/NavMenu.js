import React from 'react'
import Link from 'gatsby-link'
import { Spring, Transition, animated } from 'react-spring'

const defaultStyles = {
  cursor: 'pointer',
  position: 'absolute',
  width: '100%',
  color: 'white',
}

const Menu = (props, styles) => (
  <animated.nav
    className={`animated
      ${props.parentProps.showNav ? 'fadeIn' : 'fadeOut'}
    `}
    id="menu"
  >
    <div className="inner">
      <ul className="links">
        <li>
          <Link onTouchTap={props.parentProps.toggleNav} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onTouchTap={props.parentProps.toggleNav} to="/services">
            Services
          </Link>
        </li>
        <li>
          <Link onTouchTap={props.parentProps.toggleNav} to="/portfolio">
            Portfolio
          </Link>
        </li>
      </ul>
    </div>
    <a className="close" onTouchTap={props.parentProps.toggleNav}>
      Close
    </a>
  </animated.nav>
)
const Null = () => <div key="12345" />

const NavMenu = props => (
  <Transition
    native
    from={{ opacity: 0 }}
    enter={{ opacity: 1 }}
    leave={{ opacity: 0 }}
    parentProps={props}
  >
    {props.showNav ? Menu : Null}
  </Transition>
)

export default NavMenu
