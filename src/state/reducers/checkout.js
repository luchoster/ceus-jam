import * as R from 'ramda'
import { Checkout } from '../actions/'

const reducer = (state = {}, action) =>
  R.cond([[R.equals(Checkout.TYPE.payment_complete)], [R.T, R.always(state)]])(
    action.type
  )
