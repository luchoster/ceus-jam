import React from 'react'
import PropTypes from 'prop-types'
import { mapIndexed, notNilOrEmpty } from '../lib/helpers'
import { AddCart } from '../lib/moltin'

const Pricing = ({ products }) => (
  <div className="columns">
    {notNilOrEmpty(products) &&
      mapIndexed((price, index) => (
        <div key={price.id} className="column">
          <section className="section">
            <h4 className="has-text-centered has-text-weight-semibold">
              {price.name}
            </h4>
            <h2 className="is-size-1 has-text-weight-bold has-text-primary has-text-centered">
              ${price.price[0].amount}
            </h2>
            <p className="has-text-weight-semibold">{price.description}</p>
            <button
              onClick={() =>
                AddCart(price.id, 1).then(item => {
                  alert(`Added ${price.name} to your cart`)
                })
              }
            >
              Add to Cart
            </button>
          </section>
        </div>
      ))(products.data)}
  </div>
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
