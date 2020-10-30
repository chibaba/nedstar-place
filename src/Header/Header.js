import React from 'react';

import './Header.css'

import logo from '../logo/logo-ned.png'

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
       {/* logo */}
           </div>
           <div className="header__nav">
             
           </div>
      
    </div>
  );
}

export default Header;
