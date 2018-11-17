import Bluebird from 'bluebird'
import R from 'ramda'
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ReactTouchTap from 'react-tap-event-plugin'
import { Transition, animated } from 'react-spring'

import { Cart } from '../state/actions'
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
    R.empty(this.state.cart) && this.props.getCart()
  }

  componentDidUpdate(prevProps, prevState) {
    if (!R.equals(this.state, prevState)) this.props.getCart()
  }

  _onToggleNav = e => {
    this.setState(state => ({ showNav: !state.showNav }))
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
          cartCount={R.compose(
            res => R.sum(res),
            mapIndexed((item, i) => item.quantity)
          )(this.props.cart.cart_content)}
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

const mapStateToProps = state => ({
  cart: state.cart,
})

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(Cart._getCart()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TemplateWrapper)
