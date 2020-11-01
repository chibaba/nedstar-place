import React from 'react';

import './Checkout.css'

const Checkout = () => {
  return (
    <div className="checkout">
    <div className="checkout__left">
      <img className='checkout__ad' 
      // src="https://allamericanairlhc.com/wp-content/uploads/2016/07/promo_offer_banner.jpg" 
      src="https://jumpseller.com/images/support/themes-documentation/simple/fixed-header.png"
      alt="banner" />
      <div className="checkout__title">
      Your Shopping Basket
      </div>
      <div className="checkout__right">
             <h2>The subtotla will go heer</h2>
      </div>
    </div>
    </div>
  );
}

export default Checkout;
