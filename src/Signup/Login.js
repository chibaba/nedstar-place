import React from 'react';
import { Link} from "react-router-dom";

import logo from '../logo/logo-ned.png' 



import './Login.css'

const Login = () => {
  return (
    <div className='login'>
    <Link to="/">
    <img 
       className="login__logo"
    src={logo} alt="nedstar" />
    </Link>
      
    </div>
  );
}

export default Login;
