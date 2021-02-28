import React from 'react';
import Product from './Product.js';
import App from './App.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

var ProductList = ({ products, click }) => (

    <div className="products">
      {products.map((product, i) => (
        <Product key={i} product={product} click={click} />
      ))}
    </div>

)

export default ProductList;