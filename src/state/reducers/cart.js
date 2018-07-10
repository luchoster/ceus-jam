import * as R from 'ramda'
import { Cart } from '../actions'

const DEFAULT_STATE = {
  cart_content: [],
  cart_count: 0,
}

const reducer = (state = DEFAULT_STATE, action) =>
  R.cond([
    [
      R.equals(Cart.TYPE.receive_cart),
      () => R.merge(state, { cart_content: action.payload }),
    ],
    [R.equals(Cart.TYPE.CLEAR_CART), R.always(DEFAULT_STATE)],
    [R.T, R.always(state)],
  ])(action.type)

export default reducer
