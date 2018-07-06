import Bluebird from 'bluebird'
import R from 'ramda'
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ReactTouchTap from 'react-tap-event-plugin'
import { Transition, animated } from 'react-spring'

import { mapIndexed, notNilOrEmpty } from '../lib/helpers'
import { GetCartItems } from '../lib/moltin'
import Navbar from '../components/Navbar'
import NavMenu from '../components/NavMenu'
import Footer from '../components/Footer'
import './all.sass'

ReactTouchTap()

class TemplateWrapper extends React.Component {
  state = {
    showNav: false,
  }

  componentDidMount() {
    R.empty(this.state.cart) && this._getCart()
  }

  _onToggleNav = e => {
    this.setState(state => ({ showNav: !state.showNav }))
  }

  _getCart = () => {
    Bluebird.resolve(GetCartItems()).then(cartItems => {
      this.setState({ cartQty: cartItems.data }, () =>
        mapIndexed((item, index) => {
          R.compose([
            R.sum(this.state.cartQty),
            this.setState({ cartQty: item.quantity }),
          ])
        })(this.state.cartQty)
      )
    })
  }

  render() {
    return (
      <React.Fragment>
        <Helmet title="Home | CompuExpress US" />
        <Navbar toggleNav={this._onToggleNav} />
        {/* Menu */}
        <NavMenu
          showNav={this.state.showNav}
          toggleNav={this._onToggleNav}
          cart={this.state.cartQty}
        />
        <div
          id="page-wrapper"
          className={`animated ${this.state.showNav ? 'blur' : ''}`}
        >
          {this.props.children()}
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
