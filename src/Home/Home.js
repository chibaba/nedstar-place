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
      <Product 
      id="12345"
      title='The lean Startup'
            price={28.76}
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
            rating={5}
      />
      <Product
        id="d4567"
        title="KenWood Kmix stand Mixer for baking, styling kitchen Mixer with kbeater.Dough Hook and Whisk, 5 litre Glass Bowl"
        price={239.09}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/I/810%2BGNdkzKL._AC_SX450_.jpg"
       />


      </div>

      <div className="home__row">
      <Product 
        id="123dfe"
        title="Samsung LC49RG92345SD 4' Curved Led Gaming Monitor"
        price={199.99}
        rating={3}
        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_jpg"
      />
   

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
