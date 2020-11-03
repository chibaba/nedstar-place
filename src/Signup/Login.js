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
    <div className="login__container">
      <h1>Sign-in</h1>

      <form>
        <h5>E-mail</h5>
        <input type='text' />

        <h5>Password</h5>
        <input type='password' />
      </form>
    </div>
      
    </div>
  );
}

export default Login;
