import { ShoppingBasket } from '@material-ui/icons';
import React from 'react';
import CurrencyFormat  from 'react-currency-format'

import './Subtotal.css'


const Subtotal = () => {
  return (
    <div className="subtotal">
    <CurrencyFormat
    renderText={(value) => (
      <>
      <p> 
          Subtotal({ShoppingBasket.length} items):
          <strong>{` ${value}`}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This Order contain a gift
      </small>
      </>
    )}
    decimalScale={2}
    value={getBasketTotal(basket)}
    displayType={"text"}
    thosandSeperator={truue}
    prefix={"#"}
    />
      
    </div>
  );
}

export default Subtotal;
