import React from 'react';
import Product from '../Product/Product';
import './Home.css';
// import homeie from '../logo/home-land.jpg'

const Home = () => {
  return (
    <div className="home">
    <div className="home-container">
    <img  className="home__image" 
    // src={homeie}
    src="https://ng.jumia.is/cms/8-18/jumia-prime/cb-jpay.jpg"
    alt="home-prime" />
    <div className="home__row">
      {/* PRODUCT */}
      <Product title='The lean Startup'
            price={28.76}
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
            rating={5}
      />
      <Product />


      </div>

      <div className="home__row">
      <Product />
      <Product />
      <Product />
   

      </div>
      <div className="home__row">
      {/* PRODUCT */}
      <Product />


      </div>

    </div>
    </div>
  );
}

export default Home;
