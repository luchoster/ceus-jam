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
      <section className="">
        <div className="panel panel--white">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div
                    className="full-width-image-container margin-top-0"
                    style={{ backgroundImage: `url(${this.props.image})` }}
                  >
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
                  <div className="columns">
                    <div className="column is-7">
                      <h3 className="has-text-weight-semibold is-size-2" />
                    </div>
                  </div>
                  <div
                    className="full-width-image-container"
                    style={{ backgroundImage: `url(${this.props.fullImage})` }}
                  />
                  <Pricing products={this.state.products} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ProductPageTemplate
