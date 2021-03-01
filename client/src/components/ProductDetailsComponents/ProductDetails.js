import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: props.id,
      productData: props.productData,
      styles: props.styles,
    };
  }

  render() {
    return (
      <div id="product-details">
        <h1>Product Details</h1>
        <h3 id="product-name">{this.props.productData.name}</h3>
        <span id="product-category">{this.props.productData.category}</span>
        <br />
        <span id="product-price">{this.props.productData.default_price}</span>
        <br />
        <span id="product-desc">{this.props.productData.description}</span>
        <br />
      </div>
    );
  }
}

export default ProductDetails;
