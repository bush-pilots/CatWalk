/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-did-update-set-state */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import QuantityDropDown from './QuantityDropDown';
import SizeDropDown from './SizeDropDown';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sku: '',
      quantity: 0,
      inOutfit: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        sku: '',
        quantity: 0
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.quantity, this.props.style.skus[this.state.sku].size, this.props.style.name, 'Added to Cart!');
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div id="add-to-cart">
        {this.props.isFetching || (
          <form id="add-to-cart-form" onSubmit={this.handleSubmit}>
            <SizeDropDown skus={this.props.style.skus} handleChange={this.handleChange} sku={this.state.sku} />
            <QuantityDropDown item={this.props.style.skus[this.state.sku]} handleChange={this.handleChange} quantity={this.state.quantity} />
            <input type="submit" value="Add to Cart!" id="add-to-cart-button" className="medium add-to-cart-input"/>
          </form>
        )}
      </div>
    );
  }
}
export default AddToCart;
