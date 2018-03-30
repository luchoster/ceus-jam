import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ReactTouchTap from 'react-tap-event-plugin'
import { Transition, animated } from 'react-spring'

import Navbar from '../components/Navbar'
import NavMenu from '../components/NavMenu'
import Footer from '../components/Footer'
import './all.sass'

ReactTouchTap()

class TemplateWrapper extends React.Component {
  state = {
    showNav: false,
  }

  _onToggleNav = e => {
    e.preventDefault()
    this.setState(state => ({ showNav: !state.showNav }))
  }

  render() {
    return (
      <React.Fragment>
        <Helmet title="Home | CompuExpress US" />
        <Navbar toggleNav={this._onToggleNav} />
        {/* Menu */}
        <NavMenu showNav={this.state.showNav} />
        <div id="page-wrapper">{this.props.children()}</div>
        <Footer />
      </React.Fragment>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
