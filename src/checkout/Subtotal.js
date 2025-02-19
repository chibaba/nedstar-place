import { ShoppingBasket } from '@material-ui/icons';
import React from 'react';
import CurrencyFormat  from 'react-currency-format'
import { getBasketTotal } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';

import './Subtotal.css'


const Subtotal = () => {
  const [{ basket}, dispatch] = useStateValue();
  return (
    <div className="subtotal">
    <CurrencyFormat
    renderText={(value) => (
      <>
      <p> 
          Subtotal({basket.length} items):
          <strong>{value}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This Order contain a gift
      </small>
      </>
    )}
    decimalScale={2}
    value={getBasketTotal(basket)}
    displayType={"text"}
    thosandSeperator={true}
    prefix={"$"}
    />
    <button>Proceed to checkout</button>
      
    </div>
  );
}

export default Subtotal;
