import React from 'react'
import Link from 'gatsby-link'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core'

const CartModal = props => (
  <Dialog
    open={props.open}
    onClose={props.close}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="simple-dialog-title">Added to Your Cart</DialogTitle>
    <DialogContent>
      <div className="columns">
        <div className="column">
          <DialogContentText id="alert-dialog-description">
            {props.itemAdded.name}
          </DialogContentText>
        </div>
        <div className="column is-2">
          <DialogContentText id="alert-dialog-description">
            ${props.itemAdded.price[0].amount}
          </DialogContentText>
        </div>
      </div>
    </DialogContent>
    <DialogActions>
      <button onClick={props.close} className="button is-light is-small">
        Continue Shopping
      </button>
      <Link to="/cart">
        <button onClick={props.close} className="button is-light is-small">
          Go to Cart
        </button>
      </Link>
    </DialogActions>
  </Dialog>
)

export default CartModal
