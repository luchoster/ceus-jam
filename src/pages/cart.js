import Bluebird from 'bluebird'
import R from 'ramda'
import React from 'react'
import { Button } from '@material-ui/core'
import { GetCartItems } from '../lib/moltin'
import { notNilOrEmpty } from '../lib/helpers'
import CartTemplate from '../templates/cart-page.js'

class CartPageTemplate extends React.Component {
  state = {}
  componentDidMount() {
    R.empty(this.state.cart) && this._getCart()
  }
  componentDidUpdate(prevProps, prevState) {
    prevState.cart != this.state.newCart && this._getCart()
  }
  _getCart = () => {
    Bluebird.resolve(GetCartItems()).then(cartItems => {
      this.setState({ cart: cartItems.data })
    })
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
                ( {this.state.cart && this.state.cart.length} )
                <span> items in cart</span>
              </small>
            </h2>
            <Button variant="raised" color="default">
              <i className="fa fa-shopping-cart" />
              Checkout
            </Button>
          </div>
        </section>
        <CartTemplate
          cart={notNilOrEmpty(this.state.cart) && this.state.cart}
          refreshCart={() => this._refreshCart()}
        />
      </React.Fragment>
    )
  }
}

export default CartPageTemplate
