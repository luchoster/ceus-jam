import * as R from 'ramda'
import Bluebird from 'bluebird'
import { OrderPay, Checkout, DeleteCart } from '../../lib/moltin'

const TYPE = {
  checkout: 'CHECKOUT',
  submit_payment: 'SUBMIT_PAYMENT',
  payment_complete: 'PAYMENT_COMPLETE',
}

const _checkout = (obj, payment) => dispatch =>
  Checkout(obj)
    .then(order => {
      console.log('checking out order -> ', order)
      OrderPay(order.data.id, { payment })
      DeleteCart()
    })
    .then(() => dispatch({ type: TYPE.payment_complete }))
    .catch(e => console.log(e))

export default {
  TYPE,
  _checkout,
}
