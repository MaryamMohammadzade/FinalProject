import React  from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import products from '../../myArray/products';
import ProductItem from '../products/ProductItem';
import Slider from 'react-slick';
const Hero = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        pauseOnFocus: true,
        slidesToShow: 4,  
        slidesToScroll: 4 
      };
    
      return (
        <Slider  {...settings}>
          {products.map((product, i) => (
            <ProductItem key={i} data={product} />
          ))}
        </Slider>
      );
}

export default Hero