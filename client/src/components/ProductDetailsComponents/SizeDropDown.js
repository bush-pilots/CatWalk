/* eslint-disable array-callback-return */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

class SizeDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  checkForOutOfStock() {
    let total = 0;
    Object.values(this.props.skus).map(({ quantity }) => {
      total += quantity;
    });
    return total > 0;
  }

  render() {
    return (
      <select id="size-drop-down" className="medium add-to-cart-input" name="sku" value={this.props.sku} onChange={this.props.handleChange} style={this.props.sizeError ? { borderColor: 'red' } : { borderColor: 'black' }}>
        {this.checkForOutOfStock() ? <option default>Select Size</option> : <option default>OUT OF STOCK</option>}
        {Object.keys(this.props.skus).map((sku) => (
          this.props.skus[sku].quantity > 0 && <option value={sku} key={sku} name="sku">{this.props.skus[sku].size}</option>
        ))}
      </select>
    );
  }
}

export default SizeDropDown;
