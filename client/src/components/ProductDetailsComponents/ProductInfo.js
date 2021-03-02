/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

const ProductInfo = (props) => (
  <div id="product-info">
    <h3 id="product-name">{props.name}</h3>
    <span id="product-category">
      Category:
      {props.category}
    </span>
    <br />
    {props.style.sale_price ? (
      <span id="sale-price">
        ON SALE! $
        {props.style.sale_price}
        !
      </span>
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
