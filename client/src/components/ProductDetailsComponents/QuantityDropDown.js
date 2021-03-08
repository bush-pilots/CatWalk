/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

class QuantityDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  populateDropDown() {
    const array = [];
    if (this.props.item === undefined) return [];
    for (let x = 1; x <= this.props.item.quantity && x <= 15; x++) {
      array.push(x);
    }
    return array;
  }

  render() {
    return (
      <select id="quantity-drop-down" className="medium add-to-cart-input"name="quantity" value={this.props.quantity} onChange={this.props.handleChange}>
        {this.populateDropDown().length === 0 ? <option default>---</option> : <option default> Select Quantity </option> }
        {this.populateDropDown().map((x) => (<option value={x} key={x}>{x}</option>))}
      </select>
    );
  }
}

export default QuantityDropDown;
