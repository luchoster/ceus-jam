import React from 'react'
import { connect } from 'react-redux'
import { FormControl, Input, InputLabel, TextField } from '@material-ui/core'
import MaskedInput from 'react-text-mask'

import { Cart } from '../state/actions'

const createOptions = () => {
  return {
    style: {
      base: {
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, monospace',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  }
}

const CreditCardMask = props => {
  const { onChange, ...other } = props
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      <InputLabel
        style={{
          display: 'block',
        }}
      >
        Card Number
      </InputLabel>
      <MaskedInput
        mask={[
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          ' ',
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          ' ',
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          ' ',
          /\d/,
          /\d/,
          /\d/,
          /\d/,
        ]}
        placeholder="4242 4242 4242 4242"
        className="MuiInput-input-13"
        onChange={onChange}
        guide={false}
      />
    </div>
  )
}

const ExpirationMask = props => {
  const { onChange, ...other } = props
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      <InputLabel
        style={{
          display: 'block',
        }}
      >
        Expiration Date
      </InputLabel>
      <MaskedInput
        guide={false}
        mask={[/\d/, /\d/, '/', /\d/, /\d/]}
        placeholder="MM/YY"
        className="MuiInput-input-13"
        onChange={onChange}
      />
    </div>
  )
}

class CheckoutPage extends React.Component {
  state = {
    ccMask: '',
    expDate: '',
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
                <label className="columns checkout-form--row">
                  <FormControl className="">
                    <Input
                      value={this.state.ccMask}
                      onChange={this.handleChange('ccMask')}
                      id="formatted-text-mask-input"
                      inputComponent={CreditCardMask}
                      startAdornment={
                        <i
                          className="fa fa-credit-card"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            paddingRight: 10,
                          }}
                        />
                      }
                    />
                  </FormControl>
                </label>
                <label className="columns checkout-form--row">
                  <FormControl className="">
                    <Input
                      id="formatted-exp-date"
                      inputComponent={ExpirationMask}
                      onChange={this.handleChange('expDate')}
                    />
                  </FormControl>
                </label>
                <label>
                  <TextField
                    id="with-placeholder"
                    label="CVC"
                    placeholder="123"
                    margin="normal"
                    inputProps={{
                      maxLength: 3,
                    }}
                  />
                </label>
                <label>
                  <TextField
                    id="with-placeholder"
                    label="Zipcode"
                    placeholder="Placeholder"
                    margin="normal"
                  />
                </label>
                <button>Pay</button>
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
)(CheckoutPage)
