import React from 'react';

import './Product.css';

const Product = () => {
  return (
    <div className="product">
      <div className="product__info">
        <p>the lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
      </div>
    </div>
  );
}

export default Product;
