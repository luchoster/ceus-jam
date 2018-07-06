import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { mapIndexed, notNilOrEmpty } from '../lib/helpers'
import { RemoveItem } from '../lib/moltin'

const CartTemplate = props => (
  <div id="content-wrapper">
    <div className="columns">
      <div className="panel panel--off-white column is-12">
        <div className="inner">
          {notNilOrEmpty(props.cart) && (
            <React.Fragment>
              <Paper
                className="cart-summary"
                style={{
                  padding: '16px 20px',
                  marginTop: '10px',
                }}
                elevation={4}
              >
                <div className="columns">
                  <div className="column has-text-centered">Item</div>
                  <div className="column is-2 has-text-centered">Qty</div>
                  <div className="column is-2 has-text-centered">Total</div>
                  <div className="column is-1 has-text-centered">Remove</div>
                </div>
              </Paper>
              {mapIndexed((item, index) => (
                <Paper
                  className="cart-summary"
                  style={{
                    padding: '16px 20px',
                    marginTop: '10px',
                  }}
                  elevation={4}
                  key={index}
                >
                  <div className="columns">
                    <div className="column">
                      <h3 style={{ color: 'rgb(38, 45, 59 )' }}>{item.name}</h3>
                    </div>
                    <div className="column is-2 has-text-centered">
                      <p>{item.quantity}</p>
                    </div>
                    <div className="column is-2 has-text-centered">
                      <h3 style={{ color: 'rgb(38, 45, 59 )' }}>
                        ${item.value.amount}
                      </h3>
                    </div>
                    <div className="column is-1 has-text-centered">
                      <h3
                        onClick={() =>
                          RemoveItem(item.id, item.quantity).then(items =>
                            props.refreshCart(items)
                          )
                        }
                        style={{ color: 'rgb(38, 45, 59 )' }}
                      >
                        <i className="fa fa-trash-o" />
                      </h3>
                    </div>
                  </div>
                  <Typography variant="headline" component="h3" />
                </Paper>
              ))(props.cart)}
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  </div>
)

export default CartTemplate
