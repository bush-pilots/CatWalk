/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

const ProductInfo = (props) => (
  <div id="product-info">
    <h3 id="product-name">{props.name}</h3>
    <span id="product-category">
      Category: <br/>
      {props.category}
    </span>
    <br />
    {props.style.sale_price ? (
      <React.Fragment>
        <span id="sale-price">
          $
          {props.style.sale_price}
          !
        </span>
        <span id="old-price">
          $
          {props.style.original_price}
        </span>
      </React.Fragment>
    ) : (
      <span id="original-price">
        $
        {props.style.original_price}
      </span>
    )}
    <br />
  </div>
);

export default ProductInfo;
