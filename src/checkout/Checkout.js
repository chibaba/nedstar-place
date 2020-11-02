import React from 'react';

import './Checkout.css'
import Subtotal from './Subtotal';
import Banner from '../logo/banner.jpg'
import { useStateValue } from '../context/StateProvider';

const Checkout = () => {
  const [{ basket}, dispatch] = useStateValue();
  return (
    <div className="checkout">
    <div className="checkout__left">
      <img className='checkout__ad' 
      src={Banner}
      // src="https://i.imgur.com/ZtdhrUA.jpg"
      alt="banner" />
      <div> 
      <h2 className="checkout__title">
      Your Shopping Basket
      </h2>
      {basket.map(item => ( 
        <CheckoutProduct />
      ))}
      </div>
      </div>

      <div className="checkout__right">
             <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
