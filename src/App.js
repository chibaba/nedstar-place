import './App.css';

import Header from './Header/Header'
import Home    from './Home/Home'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './checkout/Checkout'
import Login from './Signup/Login'
import { auth } from './firebase'
import { useStateValue } from "./context/StateProvider"

function App() {
  const[{}, dispatch] = useStateValue();

 useEffect(() => {

  auth.onAuthStateChanged(authUser => {
    console.log('The user is >>>', authUser);

    if(authUser) {

      dispatch({
        type: 'SET_USER',
        user: authUser
      })

    } else {
      dispatch({
        type: 'SET_USER',
        user: null
      })

    }
  })

 }, [])

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
