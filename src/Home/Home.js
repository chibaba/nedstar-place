import React from 'react';
import Product from '../Product/Product';
import './Home.css';
import homeie from '../logo/home-land.jpg'

const Home = () => {
  return (
    <div className="home">
    <div className="home-container">
    <img  className="home__image" 
    src={homeie}
    // src="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2020/06/01122619/700VastOfNight.jpg"
    alt="home-prime" />
    <div className="home__row">
      {/* PRODUCT */}
      <Product />
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
