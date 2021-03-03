/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: '',
      quantity: 0,
      inOutfit: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        size: '',
        quantity: 0
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.quantity, this.state.size, this.props.style.name, 'Added to Cart!');
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div id="add-to-cart">
        <form id="add-to-cart-form" onSubmit={this.handleSubmit}>
          <select name="size" value={this.state.size} onChange={this.handleChange}>
            <option default>Select Size</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          <select name="quantity" value={this.state.quantity} onChange={this.handleChange}>
            <option default>Quantity</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Add to Cart!" />
        </form>
      </div>
    );
  }
}
export default AddToCart;
