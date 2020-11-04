import React, {useState} from 'react';
import { Link} from "react-router-dom";

import logo from '../logo/logo-ned.png' 



import './Login.css'

const Login = () => {
  const  [email, setEmail] = useState('');
  const  [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    // enter firebase code
  }

  const register = e => {
    e.preventDefault();
    // apply firebase code
  }

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
        <input type='text' value={email} onChange=
          {e => setEmail(e.target.value)}
        />

        <h5>Password</h5>
        <input type='password' value={password} onChanege=
          {e=>setPassword(e.target.value)}
        />
        <button type='submit' onClick={signIn}
        className='login__signInButton'> Sign in</button>
      </form>
      <p>
        By Signing-in you agree to Nedstar's
        Conditions of Use & Sale. Please
        see our privacy Notice, our Cookie Notice
        and our Interest-Based Ads
        Notice.
      </p>
      <button  onClick={register}
      className="login__registerButton">Create your Nedstar account</button>
    </div>
      
    </div>
  );
}

export default Login;
