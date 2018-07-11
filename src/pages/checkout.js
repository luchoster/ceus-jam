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
    expiry: '',
    cvc: '',
    issuer: '',
    focused: '',
    formData: null,
  }
  componentDidMount() {
    this.props.getCart()
  }
  handleBlur = () => {
    console.log('[blur]')
  }
  handleChange = change => {
    console.log('[change]', change)
  }
  handleClick = () => {
    console.log('[click]')
  }
  handleFocus = () => {
    console.log('[focus]')
  }
  handleReady = () => {
    console.log('[ready]')
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
                <span> Checkout </span>
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
                          <InputLabel
                            style={{
                              display: 'block',
                            }}
                          >
                            Credit Card Number
                          </InputLabel>
                          <TextField
                            placeholder="Enter your credit card number"
                            InputProps={{
                              inputComponent: CreditCardMask,
                            }}
                            onChange={this.handleChange('cardNumber')}
                            fullWidth
                          />
                        </div>
                      </div>
                      <div className="columns">
                        <div className="column">
                          <InputLabel
                            style={{
                              display: 'block',
                            }}
                          >
                            Expiration Date
                          </InputLabel>
                          <TextField
                            placeholder="MM/YY"
                            InputProps={{
                              inputComponent: ExpirationMask,
                            }}
                            onChange={this.handleChange('cvc')}
                          />
                        </div>
                        <div className="column">
                          <InputLabel
                            style={{
                              display: 'block',
                            }}
                          >
                            CVC
                          </InputLabel>
                          <TextField
                            placeholder="123"
                            inputProps={{
                              maxLength: 3,
                            }}
                            onChange={this.handleChange('cvc')}
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
