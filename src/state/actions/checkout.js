import * as R from 'ramda'
import Bluebird from 'bluebird'
import { OrderPay, Checkout, DeleteCart } from '../../lib/moltin'

const TYPE = {
  checkout: 'CHECKOUT',
  submit_payment: 'SUBMIT_PAYMENT',
  payment_complete: 'PAYMENT_COMPLETE',
}

const _checkout = ({ obj, payment }) => dispatch =>
  Checkout({ obj })
    .then(order => {
      dispatch({ type: TYPE.submit_payment })
      OrderPay(order.data.id, { payment })
      DeleteCart()
    })
    .then(() => dispatch({ type: TYPE.payment_complete }))

export default {
  TYPE,
  _checkout,
}
