import React from 'react';

import './Checkout.css'

const Checkout = () => {
  return (
    <div className="checkout">
    <div className="checkout__left">
      <img className='checkout__ad' 
      // src="https://jumpseller.com/images/support/themes-documentation/simple/fixed-header.png"
      src="https://i.imgur.com/ZtdhrUA.jpg"
      alt="banner" />
      <div> 
      <h2 className="checkout__title">
      Your Shopping Basket
      </h2>
      </div>
      </div>

      <div className="checkout__right">
             <h2>The subtotla will go heer</h2>
      </div>
    </div>
  );
}

export default Checkout;
