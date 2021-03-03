import React from 'react';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: '',
      quantity: 0,
      inOutfit: false
    };
  }
}
export default AddToCart;
