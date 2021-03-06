import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/singleProduct'
import AddToCart from './AddToCart'
import ReviewList from './ReviewsList'

export class SingleProduct extends React.Component {
  componentDidMount() {
    try {
      this.props.loadSingleProduct(this.props.match.params.productId)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const currentProduct = this.props.singleProduct

    return (
      <div id="single-product">
        <div>
          <img
            id="single-product-image"
            src={currentProduct.imageUrl}
            alt={`a picture of ${currentProduct.name}`}
          />
        </div>
        <div id="single-product-info">
          <h2>{currentProduct.name}</h2>
          <div id="single-product-details">
            Price: {currentProduct.price}{' '}
            <AddToCart
              productId={currentProduct.id}
              orderId={this.props.orderId}
            />
          </div>
          <p id="product-description">{currentProduct.description}</p>
        </div>
        <ReviewList />
      </div>
    )
  }
}

//here's where the map State will go
const mapState = reduxState => ({
  singleProduct: reduxState.singleProduct,
  orderId: reduxState.order.id
})

//and the mapDispatch
const mapDispatch = dispatch => ({
  loadSingleProduct: id => dispatch(fetchSingleProduct(id))
})

//and the export w/connect statement

export default connect(mapState, mapDispatch)(SingleProduct)
