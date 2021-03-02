/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import ProductInfo from './ProductInfo';
import StyleSelector from './StyleSelector';
import ImageGallery from './ImageGallery';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyle: {}
    };
    this.changeStyle = this.changeStyle.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.styles !== this.props.styles) {
      this.findDefaultStyle();
    }
  }

  changeStyle(style) {
    this.setState({ currentStyle: style });
  }

  findDefaultStyle() {
    const stylesArray = this.props.styles.results || [];
    stylesArray.forEach((style) => {
      if (style['default?']) this.changeStyle(style);
    });
  }

  render() {
    return (
      <div id="product-details">
        <h1>Product Details</h1>
        <ImageGallery style={this.state.currentStyle} />
        <ProductInfo
          name={this.props.productData.name}
          style={this.state.currentStyle}
          category={this.props.productData.category}
        />
        <span id="product-slogan">
          Slogan:
          {this.props.productData.slogan}
        </span>
        <br />
        <span id="product-desc">
          Description:
          {this.props.productData.description}
        </span>
        <br />
        <StyleSelector
          styles={this.props.styles || []}
          currentStyle={this.state.currentStyle}
          changeStyle={this.changeStyle}
        />
      </div>
    );
  }
}

export default ProductDetails;
