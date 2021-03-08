/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

const ProductInfo = (props) => (
  <div id="product-info">
    <h1 id="product-name">{props.name}</h1>
    <span id="product-category">
      {props.category}
    </span>
    <br />
    <br />
    {props.style.sale_price ? (
      <React.Fragment>
        <span id="sale-price" className="large">
          $
          {props.style.sale_price}
        </span>
        <br />
        <span id="old-price" className="small">
          $
          {props.style.original_price}
        </span>
      </React.Fragment>
    ) : (
      <span id="original-price" className="large">
        $
        {props.style.original_price}
      </span>
    )}
    <br />
  </div>
);

export default ProductInfo;
