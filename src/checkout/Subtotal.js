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
          <strong>0</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This Order contain a gift
      </small>
      </>
    )}
    decimalScale={2}
    value={0}
    displayType={"text"}
    thosandSeperator={true}
    prefix={"$"}
    />
      
    </div>
  );
}

export default Subtotal;
