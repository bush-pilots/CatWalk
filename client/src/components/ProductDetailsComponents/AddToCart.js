/* eslint-disable array-callback-return */
/* eslint-disable no-console */
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
      inOutfit: false,
      quantityError: false,
      sizeError: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkForOutOfStock = this.checkForOutOfStock.bind(this);
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
    if (this.state.sku === 'Select Size' || !this.state.sku) this.setState({ sizeError: true });
    else if (this.state.quantity === 'Select Quantity' || !this.state.quantity) this.setState({ quantityError: true });
    else {
      console.log(this.state.quantity, this.props.style.skus[this.state.sku].size, this.props.style.name, 'Added to Cart!');
      this.setState({ sizeError: false, quantityError: false });
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ sizeError: false });
    this.setState({ quantityError: false });
  }

  checkForOutOfStock() {
    let total = 0;
    Object.values(this.props.style.skus).map(({ quantity }) => {
      total += quantity;
    });
    return total > 0;
  }

  render() {
    return (
      <div id="add-to-cart">
        {this.props.isFetching || (
          <form id="add-to-cart-form" onSubmit={this.handleSubmit}>
            <SizeDropDown skus={this.props.style.skus} handleChange={this.handleChange} sku={this.state.sku} sizeError={this.state.sizeError} checkForOutOfStock={this.checkForOutOfStock} />
            <QuantityDropDown item={this.props.style.skus[this.state.sku]} handleChange={this.handleChange} quantity={this.state.quantity} quantityError={this.state.quantityError} />
            {this.checkForOutOfStock() && <input type="submit" value="Add to Cart!" id="add-to-cart-button" className="medium add-to-cart-input" />}
            {this.state.sizeError && <span className="add-to-cart-error">Please Select a Size!</span>}
            {this.state.quantityError && <span className="add-to-cart-error">Please Select a Quantity!</span>}
          </form>
        )}
      </div>
    );
  }
}
export default AddToCart;
