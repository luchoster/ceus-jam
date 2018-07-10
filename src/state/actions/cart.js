import * as R from 'ramda'
import Bluebird from 'bluebird'
import { GetCartItems, DeleteCart } from '../../lib/moltin'

const TYPE = {
  count: 'RECEIVE_COUNT',
  receive_cart: 'RECEIVE_CART',
  clear_cart: 'CLEAR_CART',
}

const _getCart = () => dispatch =>
  GetCartItems().then(cartItems => {
    dispatch({ type: TYPE.receive_cart, payload: cartItems.data })
  })

const _deleteCart = () => dispatch =>
  DeleteCart().then(cart => dispatch({ type: TYPE.clear_cart }))

export default {
  TYPE,
  _getCart,
}
