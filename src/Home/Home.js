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
        image="https://www.220-electronics.com/media/catalog/product/k/e/kenwood-kmix-kmx51-mixer--up.jpg"
       />


      </div>

      <div className="home__row">
      <Product 
        id="123dfe"
        title="Samsung LC49RG92345SD 4' Curved Led Gaming Monitor"
        price={199.99}
        rating={3}
        image="https://static.toiimg.com/photo/77588460.cms"
      />
       <Product 
        id="fe323dfe"
        title="Amazon Echo (3rd Generation) |
        Smart speaker with Alexa, Charcoal fabric"
        price={98.23}
        rating={4}
        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
      /> <Product 
        id="cfg33dfe"
        title="New apple ipad Pro (12.9-inch,Wi-Fi, 128GB) - Silver (4th Generation)"
        price={599.99}
        rating={5}
        image="https://www.apple.com/newsroom/images/product/airpods/standard/Apple_AirPods-Pro_New-Design_102819_LP_hero.jpg.og.jpg"
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
