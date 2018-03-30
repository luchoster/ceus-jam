import React from 'react'
import Link from 'gatsby-link'
import { Transition, animated } from 'react-spring'

const defaultStyles = {
  cursor: 'pointer',
  position: 'absolute',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
}

const Menu = styles => (
  <animated.nav id="menu" style={{ ...defaultStyles, ...styles }}>
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
          <Link to="#" className="button fit">
            Log In
          </Link>
        </li>
      </ul>
    </div>
    <Link className="close" to="/">
      Close
    </Link>
  </animated.nav>
)
const Null = styles => <animated.div style={{ ...defaultStyles, ...styles }} />

const NavMenu = props => (
  <Transition
    native
    from={{ opacity: 0 }}
    enter={{ opacity: 1 }}
    leave={{ opacity: 0 }}
    config={{ tension: 1, friction: 2 }}
  >
    {props.showNav ? Menu : Null}
  </Transition>
)

export default NavMenu
