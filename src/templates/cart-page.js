import * as R from 'ramda'
import React from 'react'
import Link from 'gatsby-link'
import { Button, Paper, Typography } from '@material-ui/core'
import { mapIndexed, notNilOrEmpty } from '../lib/helpers'
import {
  DeleteCart,
  RemoveItem,
  UpdateCartPlus,
  UpdateCartMinus,
} from '../lib/moltin'

const CartTemplate = props => (
  <div id="content-wrapper">
    <div className="columns">
      <div className="panel panel--off-white column is-12">
        <div className="inner">
          {notNilOrEmpty(props.cart) && (
            <React.Fragment>
              <main role="main" id="container" className="main-container push">
                <section className="cart">
                  <div className="content">
                    <Paper
                      className="cart-summary"
                      style={{
                        padding: '16px 20px',
                        marginTop: '10px',
                      }}
                      elevation={4}
                    >
                      <div className="cart-list-headings">
                        <div className="cart-product-header">Product</div>
                        <div className="cart-header-group">
                          <div className="cart-empty-header" />
                          <div className="cart-quantity-header">Quantity</div>
                          <div className="cart-price-header">Price</div>
                        </div>
                      </div>
                    </Paper>
                    {mapIndexed((item, index) => (
                      <Paper
                        className="cart-summary"
                        style={{
                          padding: '16px 20px',
                          marginTop: '10px',
                        }}
                        elevation={4}
                        key={index}
                      >
                        <div className="cart-item">
                          <div className="product-image" aria-hidden="true">
                            <img
                              alt="placeholder"
                              src="https://placeholdit.imgix.net/~text?txtsize=69&amp;txt=824%C3%971050&amp;w=824&amp;h=1050"
                            />
                          </div>
                          <div className="cart-details">
                            <div className="cart-title">
                              <h3>{item.name}</h3>
                            </div>
                            <div className="cart-quantity">
                              <div className="quantity-input">
                                <p className="hide-content">
                                  Product quantity.
                                </p>
                                <p className="hide-content">
                                  Change the quantity by using the buttons, or
                                  alter the input directly.
                                </p>
                                <button
                                  type="button"
                                  className="decrement number-button"
                                  onClick={() => {
                                    UpdateCartMinus(
                                      item.id,
                                      item.quantity
                                    ).then(items => props.refreshCart(items))
                                  }}
                                >
                                  <span className="hide-content">
                                    Decrement quantity
                                  </span>
                                  <span aria-hidden="true">-</span>
                                </button>
                                <input
                                  type="number"
                                  min="1"
                                  disabled
                                  className="quantity"
                                  name="number"
                                  size="2"
                                  value={item.quantity}
                                />
                                <button
                                  type="button"
                                  className="increment number-button"
                                  onClick={() => {
                                    UpdateCartPlus(item.id, item.quantity).then(
                                      items => props.refreshCart(items)
                                    )
                                  }}
                                >
                                  <span className="hide-content">
                                    Increment quantity
                                  </span>
                                  <span aria-hidden="true">+</span>
                                </button>
                              </div>
                            </div>
                            <div className="cart-price">
                              <p className="price">
                                <span className="item-price hidden">
                                  <span className="hide-content">
                                    Price per item{' '}
                                  </span>$<span className="product-price">
                                    {item.unit_price.amount}
                                  </span>
                                  <span aria-hidden="true"> / </span>
                                </span>
                                <span className="hide-content">
                                  Product subtotal{' '}
                                </span>$<span className="total-product-price">
                                  {item.unit_price.amount}
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="cart-delete">
                            <h3
                              onClick={() =>
                                RemoveItem(item.id, item.quantity).then(items =>
                                  props.refreshCart(items)
                                )
                              }
                            >
                              <span className="hide-content">Delete item</span>
                              <i className="fa fa-trash-o" />
                            </h3>
                          </div>
                        </div>
                      </Paper>
                    ))(props.cart)}
                    <div className="total-price">
                      Subtotal<span className="hide-content">
                        {' '}
                        of all products
                      </span>{' '}
                      <span className="price">
                        ${notNilOrEmpty(props.cart) &&
                          R.compose(
                            res => R.sum(res),
                            mapIndexed((item, index) => item.value.amount)
                          )(props.cart)}
                      </span>
                    </div>
                    <Link className="btn submit" to="/checkout">
                      <i className="fa fa-shopping-cart" /> Checkout
                    </Link>
                  </div>
                </section>
              </main>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  </div>
)

export default CartTemplate
