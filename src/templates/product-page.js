import Bluebird from 'bluebird'
import * as R from 'ramda'
import React from 'react'
import PropTypes from 'prop-types'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import { notNilOrEmpty, mapIndexed } from '../lib/helpers'
import { GetProducts, Products } from '../lib/moltin'

class ProductPageTemplate extends React.Component {
  state = {}
  componentDidMount() {
    this._getAllProducts()
  }
  _getAllProducts = () => {
    return Bluebird.resolve(GetProducts()).then(products => {
      this.setState({ products: products })
    })
  }
  render() {
    return (
      <React.Fragment>
        <section
          id="banner"
          style={{ backgroundImage: `url(${this.props.image})` }}
        >
          <div className="inner">
            <h2
              className="has-text-weight-bold is-size-1"
              style={{
                boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                backgroundColor: '#f40',
                color: 'white',
                padding: '1rem',
              }}
            >
              Our Products
            </h2>
          </div>
        </section>
        <Pricing products={this.state.products} />
      </React.Fragment>
    )
  }
}

export default ProductPageTemplate
