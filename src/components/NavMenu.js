import Bluebird from 'bluebird'
import R from 'ramda'
import React from 'react'
import Link from 'gatsby-link'
import { Spring, Transition, animated } from 'react-spring'
import { GetCartItems } from '../lib/moltin'
import { mapIndexed, notNilOrEmpty } from '../lib/helpers'

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
          <Link onClick={props.parentProps.toggleNav} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.parentProps.toggleNav} to="/services">
            Services
          </Link>
        </li>
        <li>
          <Link onClick={props.parentProps.toggleNav} to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="fa fa-shopping-cart" /> Cart ({notNilOrEmpty(
              props.parentProps.cart
            )
              ? props.parentProps.cart
              : 0})
          </Link>
        </li>
      </ul>
    </div>
    <a className="close" onClick={props.parentProps.toggleNav}>
      Close
    </a>
  </animated.nav>
)
const Null = () => <div key={Math.random() * 0.123473515} />

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
