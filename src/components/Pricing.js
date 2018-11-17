import React from 'react'
import { mapIndexed, notNilOrEmpty } from '../lib/helpers'
import { AddCart } from '../lib/moltin'

const Pricing = props => (
  <section id="content-wrapper">
    {notNilOrEmpty(props.products) &&
      mapIndexed((price, index) => (
        <section className="panel panel--products" key={index}>
          <div className="inner">
            <div className="columns">
              <div className="column">
                <h4 className="title has-text-centered has-text-weight-semibold">
                  {price.name}
                </h4>
                <h2 className="is-size-1 has-text-weight-bold has-text-primary has-text-centered">
                  ${price.price[0].amount}
                </h2>
              </div>
              <div className="column">
                <p className="has-text-weight-semibold">{price.description}</p>
              </div>
              <div className="columns">
                <div className="column">
                  <button
                    onClick={() =>
                      AddCart(price.id, 1).then(items => props.added(price))
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))(props.products.data)}
  </section>
)

// Pricing.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       plan: PropTypes.string,
//       price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//       description: PropTypes.string,
//       items: PropTypes.array,
//     })
//   ),
// }

export default Pricing
