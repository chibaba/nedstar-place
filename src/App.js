import './App.css';

import Header from './Header/Header'
import Home    from './Home/Home'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './checkout/Checkout'
import Login from './Signup/Login'

function App() {
  return (

    // BEM CONVENTION
  <Router>
    <div className="app">
    <Switch>
    <Route path="/login">
     <Login />
    </Route>
    <Route path="/checkout">
    <Header />

     <Checkout />
    </Route>
    <Route path="/">
    <Header />

    <Home />
    </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
