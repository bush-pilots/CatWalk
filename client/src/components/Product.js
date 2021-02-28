import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

var Product = ({ product, click }) => {


  return (
    <div>
      <Link onClick={click} to={'/' + product.id}>{product.id}</Link>
    </div>


  )
}

export default Product;