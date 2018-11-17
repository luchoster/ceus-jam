import * as R from 'ramda'
import React from 'react'
import Link from 'gatsby-link'
import { connect } from 'react-redux'
import { mapIndexed, notNilOrEmpty } from '../lib/helpers'
import CartTemplate from '../templates/cart-page.js'
import { Cart } from '../state/actions'

class CartPageTemplate extends React.Component {
  state = {}
  componentDidMount() {
    R.empty(this.state.cart) && this.props.getCart()
  }
  componentDidUpdate(prevProps, prevState) {
    !R.equals(prevState, this.state) && this.props.getCart()
  }
  _refreshCart = cart =>
    this.setState({
      newCart: cart,
    })
  render() {
    return (
      <React.Fragment>
        <section id="banner">
          <div className="inner">
            <h2>
              <small>
                ({' '}
                {this.props.cart &&
                  R.compose(
                    res => R.sum(res),
                    mapIndexed((item, index) => item.quantity)
                  )(this.props.cart.cart_content)}
                )<span> items in cart</span>
              </small>
            </h2>
            <div className="columns is-centered">
              <div className="column is-4">
                <Link className="btn" to="/checkout">
                  <i className="fa fa-shopping-cart" /> Checkout
                </Link>
              </div>
            </div>
          </div>
        </section>
        <CartTemplate
          cart={notNilOrEmpty(this.props.cart) && this.props.cart.cart_content}
          refreshCart={cart => this._refreshCart(cart)}
        />
      </React.Fragment>
    )
  }
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
)(CartPageTemplate)
