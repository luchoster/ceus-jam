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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="">Generic</Link>
        </li>
        <li>
          <Link to="/">Elements</Link>
        </li>
      </ul>
      <ul className="actions vertical">
        <li>
          <Link to="#" className="button special fit">
            Get Started
          </Link>
        </li>
        <li>
          <a href="#" className="button fit">
            Log In
          </a>
        </li>
      </ul>
    </div>
    <a className="close" onTouchTap={props.parentProps.toggleNav}>
      Close
    </a>
  </animated.nav>
)
const Null = () => <div />

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
