import './App.css';

import Header from './Header/Header'
import Home    from './Home/Home'

function App() {
  return (

    // BEM CONVENTION

    <div className="app">
     <Header />
    {/* hEADER */}

    {/* hOME COmponent */}
    <Home />
    </div>
  );
}

export default App;
