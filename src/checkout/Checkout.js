import React from 'react';

import './Checkout.css'
import Subtotal from './Subtotal';
import Banner from '../logo/banner.jpg'
import { useStateValue } from '../context/StateProvider';
import  CheckoutProduct from './CheckoutProduct'

const Checkout = () => {
  const [{ basket, user}, dispatch] = useStateValue();
  return (
    <div className="checkout">
    <div className="checkout__left">
      <img className='checkout__ad' 
      src={Banner}
      // src="https://i.imgur.com/ZtdhrUA.jpg"
      alt="banner" />
      <div> 
      <h3>Hello, {user?.email}</h3>
      <h2 className="checkout__title">
      Your Shopping Basket
      </h2>
      {basket.map(item => ( 
        <CheckoutProduct
        id={item.id}
        title={item.title}
        price={item.price}
        image={item.image}
        rating={item.rating}
         />
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
