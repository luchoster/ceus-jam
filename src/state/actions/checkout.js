import { OrderPay, Checkout, DeleteCart } from '../../lib/moltin'
import { navigate } from 'gatsby'

const TYPE = {
  checkout: 'CHECKOUT',
  submit_payment: 'SUBMIT_PAYMENT',
  payment_complete: 'PAYMENT_COMPLETE',
}

const _checkout = (customer, address, payment) => dispatch => {
  Checkout(customer, address.billing_address, address.shipping_address)
    .then(order => {
      OrderPay(order.data.id, payment)
      DeleteCart()
    })
    .then(() => {
      dispatch(dispatch => {
        dispatch({ type: TYPE.payment_complete })
        dispatch(navigate('/order-confirmation'))
      })
    })
    .catch(e => console.log('error => ', e))
}

export default {
  TYPE,
  _checkout,
}
