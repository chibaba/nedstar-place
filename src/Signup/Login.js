import React, {useState} from 'react';
import { Link} from "react-router-dom";

import logo from '../logo/logo-ned.png' 



import './Login.css'

const Login = () => {
  const  [email, setEmail] = useState('');
  const  [password, setPassword] = useState('');

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
        <button 
        className='login__signInButton'> Sign in</button>
      </form>
      <p>
        By Signing-in you agree to Nedstar's
        Conditions of Use & Sale. Please
        see our privacy Notice, our Cookie Notice
        and our Interest-Based Ads
        Notice.
      </p>
      <button className="login__registerButton">Create your Nedstar account</button>
    </div>
      
    </div>
  );
}

export default Login;
