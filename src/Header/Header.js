import React from 'react';

import './Header.css'

import logo from '../logo/logo-ned.png' 
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { auth } from '../firebase';

const Header = () => {

const [{ basket, user}, dispatch] = useStateValue();

const handleAuthentication = () => {
  if (user) {
    auth.signOut();
  }
}

  return (
    <div className="header">
    <Link to="/">

    <img 
      className="header__logo"
      src={logo} alt="company's logo"
    />
    </Link>
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
           <Link to={!user && "/login"}>
             <div onClick={handleAuthentication}
             className="header__option">
               <span
               className="header__optionLineOne">Hello Guest</span>
               <span 
               className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>

             </div>
             </Link>
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
             <Link to="/checkout">
             <div className="header__optionBasket">
               <ShoppingBasketIcon />
               <span className="header__optionaLineTwo header__basketCount"
               >{basket?.length}</span>
             </div>
             </Link>

           </div>
      
    </div>
  );
}

export default Header;
