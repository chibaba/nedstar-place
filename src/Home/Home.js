import React from 'react';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
  return (
    <div className="home">
    <div className="home-container">
    <img  className="home__image" 
    src="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2020/06/01122619/700VastOfNight.jpg"
    alt="home-prime" />
    <div className="home__row">
      {/* PRODUCT */}
      <Product />

      </div>

      <div className="home__row">
      {/* PRODUCT */}
      {/* PRODUCT */}
      {/* PRODUCT */}

      </div>
      <div className="home__row">
      {/* PRODUCT */}

      </div>

    </div>
    </div>
  );
}

export default Home;
