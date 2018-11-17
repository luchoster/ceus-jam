import Bluebird from 'bluebird'
import React from 'react'
import Pricing from '../components/Pricing'
import { notNilOrEmpty } from '../lib/helpers'
import { GetProducts } from '../lib/moltin'
import CartModal from '../components/Modal'

class ProductPageTemplate extends React.Component {
  state = {
    openCart: false,
    itemAdded: '',
  }
  componentDidMount() {
    this._getAllProducts()
  }

  _closeCart = () => this.setState({ openCart: false })

  _getAllProducts = () => {
    return Bluebird.resolve(GetProducts()).then(products => {
      this.setState({ products: products })
    })
  }
  _addedItem = () => name =>
    notNilOrEmpty(name) && this.setState({ openCart: true, itemAdded: name })

  render() {
    return (
      <React.Fragment>
        {notNilOrEmpty(this.state.itemAdded) && (
          <CartModal
            itemAdded={this.state.itemAdded}
            open={this.state.openCart}
            close={this._closeCart}
          />
        )}
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
        <Pricing products={this.state.products} added={this._addedItem()} />
      </React.Fragment>
    )
  }
}

export default ProductPageTemplate
