import * as R from 'ramda'
import React from 'react'
import { connect } from 'react-redux'
import Cleave from 'cleave.js/react'
import {
  FormControl,
  Input,
  InputLabel,
  TextField,
  withStyles,
} from '@material-ui/core'

import { mapIndexed, notNilOrEmpty } from '../lib/helpers'
import { Cart } from '../state/actions'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
})

const CreditCardMask = props => {
  const { onChange, ...other } = props
  return (
    <Cleave
      placeholder="Enter your credit card number"
      options={{ creditCard: true }}
      onChange={onChange}
    />
  )
}

const ExpirationMask = props => {
  const { onChange, ...other } = props
  return (
    <Cleave
      placeholder="MM/YY"
      options={{ date: true, datePattern: ['m', 'y'] }}
      onChange={onChange}
    />
  )
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
  }
  componentDidMount() {
    this.props.getCart()
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }
  render() {
    console.log(this.state)
    const { cardNumber, expiry, cvc } = this.state
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
                    <form>
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
                      <button>Pay</button>
                    </form>
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
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CheckoutPage))
