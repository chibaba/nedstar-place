import React from 'react';

import './Header.css'

import logo from '../logo/logo-ned.png'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const Header = () => {
  return (
    <div className="header">
    <img 
      className="header__logo"
      src={logo} alt="company's logo"
    />
    <div
    className="header__search">
       
       <input
       className="header__searchInput"
       type="text" />
       <SearchIcon
       className="header__searchIcon" />
       {/* logo */}
           </div>
           <div className="header__nav">
             <div className="header__option">
               <span
               className="header__optionLineOne">Hello Guest</span>
               <span 
               className="header__optionLineTwo">Sign in</span>

             </div>
             <div className="header__option">
             <span
               className="header__optionLineOne">Returns</span>
               <span 
               className="header__optionLineTwo">& Orders</span>
             </div>
             <div className="header__option">
             <span
               className="header__optionLineOne">Yours</span>
               <span 
               className="header__optionLineTwo">Prime</span>
             </div>

             <div className="header__optionBasket">
               <ShoppingBasketIcon />
               <span className="header__optionaLineTwo header__basketCount"
               >0</span>
             </div>

           </div>
      
    </div>
  );
}

export default Header;
