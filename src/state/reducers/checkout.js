import * as R from 'ramda'
import { Checkout } from '../actions/'

const reducer = (state = {}, action) =>
  R.cond([
    [R.equals(Checkout.TYPE.submit_payment), R.always(action.payload)],
    [R.T, R.always(state)],
  ])(action.type)
