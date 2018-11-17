import * as R from 'ramda'
import React from 'react'
import { connect } from 'react-redux'
import Cleave from 'cleave.js/react'
import { TextField } from '@material-ui/core'

import { mapIndexed, notNilOrEmpty } from '../lib/helpers'
import { Cart, Checkout } from '../state/actions'

// const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
// })

const CreditCardMask = props => {
  const { onChange } = props
  return (
    <Cleave
      placeholder="Enter your credit card number"
      options={{ creditCard: true }}
      onChange={onChange}
    />
  )
}

const ExpirationMask = props => {
  const { onChange } = props
  return (
    <Cleave
      placeholder="MM/YY"
      options={{ date: true, datePattern: ['m', 'y'] }}
      onChange={onChange}
    />
  )
}

var CheckoutTemplate = {
  shipping_address: {
    first_name: '',
    last_name: '',
    line_1: '',
    line_2: '',
    city: '',
    postcode: '',
    county: '',
    country: '',
  },
  billing_address: {
    first_name: '',
    last_name: '',
    line_1: '',
    line_2: '',
    city: '',
    postcode: '',
    county: '',
    country: '',
  },
}

class CheckoutPage extends React.Component {
  state = {
    cardNumber: '',
    name: '',
    email: '',
    expiry: '',
    cvc: '',
    issuer: '',
    focused: '',
    formData: null,
    gateway: 'braintree',
    method: 'purchase',
    month: '08',
    year: '2020',
    line_1: '',
    postcode: '',
    city: '',
    county: '',
    country: '',
  }
  componentDidMount() {
    this.props.getCart()
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  _submitPaymentInfo = () => {
    CheckoutTemplate.billing_address.first_name = this.state.name
    CheckoutTemplate.billing_address.line_1 = this.state.line_1
    CheckoutTemplate.billing_address.city = this.state.city
    CheckoutTemplate.billing_address.county = this.state.county
    CheckoutTemplate.billing_address.country = this.state.country
    CheckoutTemplate.billing_address.postcode = this.state.postcode

    CheckoutTemplate.shipping_address.first_name = this.state.name
    CheckoutTemplate.shipping_address.line_1 = this.state.line_1
    CheckoutTemplate.shipping_address.city = this.state.city
    CheckoutTemplate.shipping_address.postcode = this.state.postcode
    CheckoutTemplate.shipping_address.county = this.state.county
    CheckoutTemplate.shipping_address.country = this.state.country

    this.props.checkout(
      {
        email: this.state.email,
        name: this.state.name,
      },
      {
        billing_address: CheckoutTemplate.billing_address,
        shipping_address: CheckoutTemplate.shipping_address,
      },
      {
        gateway: 'braintree',
        method: 'purchase',
        name: this.state.name,
        number: this.state.cardNumber,
        month: '08',
        year: '2020',
        verification_value: this.state.cvc,
      }
    )
    // this.props.checkout(CheckoutTemplate, {
    //   gateway: 'braintree',
    //   method: 'purchase',
    //   name: this.state.name,
    //   number: this.state.cardNumber,
    //   month: '08',
    //   year: '2020',
    //   verification_value: this.state.cvc,
    // })
  }

  render() {
    // const {
    //   line_1,
    //   country,
    //   county,
    //   postcode,
    //   name,
    //   email,
    //   cardNumber,
    //   expiry,
    //   cvc,
    // } = this.state
    return (
      <React.Fragment>
        <section id="banner">
          <div className="inner">
            <h2>
              <small>
                <span>
                  {' '}
                  Checkout ({' $'}
                  {notNilOrEmpty(this.props.cart.cart_content) &&
                    R.compose(
                      res => R.sum(res),
                      mapIndexed((item, index) => item.value.amount)
                    )(this.props.cart.cart_content)}{' '}
                  )
                </span>
              </small>
            </h2>
          </div>
        </section>
        <div id="content-wrapper">
          <div className="columns">
            <div className="panel panel--off-white column is-12">
              <div className="inner checkout-form">
                <div className="columns is-centered">
                  <div className="column is-6">
                    <div className="columns">
                      <div className="column">
                        <TextField
                          placeholder="Name"
                          inputProps={{}}
                          onChange={this.handleChange('name')}
                          fullWidth
                          required
                        />
                      </div>
                      <div className="column">
                        <TextField
                          placeholder="Email"
                          onChange={this.handleChange('email')}
                          fullWidth
                          required
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">
                        <TextField
                          placeholder="Address"
                          onChange={this.handleChange('line_1')}
                          fullWidth
                          required
                        />
                      </div>
                      <div className="column">
                        <TextField
                          placeholder="City"
                          onChange={this.handleChange('city')}
                          fullWidth
                          required
                        />
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">
                        <TextField
                          placeholder="State"
                          onChange={this.handleChange('county')}
                          fullWidth
                          required
                        />
                      </div>
                      <div className="column">
                        <TextField
                          placeholder="Zipcode"
                          onChange={this.handleChange('postcode')}
                          fullWidth
                          required
                        />
                      </div>
                      <div className="column">
                        <TextField
                          placeholder="Country"
                          onChange={this.handleChange('country')}
                          fullWidth
                          required
                        />
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">
                        <TextField
                          placeholder="Enter your credit card number"
                          InputProps={{
                            inputComponent: CreditCardMask,
                          }}
                          onChange={this.handleChange('cardNumber')}
                          fullWidth
                          required
                        />
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">
                        <TextField
                          placeholder="MM/YY"
                          InputProps={{
                            inputComponent: ExpirationMask,
                          }}
                          onChange={this.handleChange('expiry')}
                          fullWidth
                          required
                        />
                      </div>
                      <div className="column">
                        <TextField
                          placeholder="123"
                          inputProps={{
                            maxLength: 3,
                          }}
                          onChange={this.handleChange('cvc')}
                          fullWidth
                          required
                        />
                      </div>
                    </div>
                    <button onClick={this._submitPaymentInfo}>Pay</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
})

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(Cart._getCart()),
  checkout: (customer, address, payment) =>
    dispatch(Checkout._checkout(customer, address, payment)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutPage)
