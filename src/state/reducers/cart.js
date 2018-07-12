import * as R from 'ramda'
import { Cart } from '../actions'

const reducer = (state = {}, action) =>
  R.cond([
    [
      R.equals(Cart.TYPE.receive_cart),
      () => R.merge(state, { cart_content: action.payload }),
    ],
    [R.equals(Cart.TYPE.CLEAR_CART), R.always(DEFAULT_STATE)],
    [R.T, R.always(state)],
  ])(action.type)

export default reducer
