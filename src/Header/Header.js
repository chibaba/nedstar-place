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
      
    </div>
  );
}

export default Header;
