import React from 'react';
import axios from 'axios';
import token from '../../../config.js';
import ProductList from './ProductList.js';
import { withRouter } from "react-router";
import { BrowserRouter, Route } from "react-router-dom"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentProduct: {}
    };
    this.onClickLink = this.onClickLink.bind(this);
  }

  getProducts() {
    //get request for all products
    var header = {
      headers: {Authorization: token}
    }
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products', header)
    .then((result) => {
      this.setState({
        products: result.data,
        currentProduct: result.data[0]
      });
      console.log(result)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  onClickLink() {
    //get the url id and change current view
    console.log(this.props)

  }

  getProductId(id) {
    //get request for all product id's
  }

  componentDidMount() {
    console.log('mounted');
    this.getProducts()
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <div>TSVT FTW! 🌴 🏰 🧵 🌩️</div>
          <div>TSVT FTW! 🌎 🌍 🌏 </div>
          <div>TSV FTW! 👾 👾 👾</div>
        </div>
        <div className="aside">{this.state.currentProduct.id}</div>
        <div className="main"><ProductList products={this.state.products} click={this.onClickLink}/></div>
        <div className="footer">FOOTER</div>
      </div>
    );
  }
}

export default withRouter(App);
