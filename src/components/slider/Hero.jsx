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
    slidesToScroll: 4 ,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};
;
    
      return (
        <Slider  {...settings}>
          {products.map((product, i) => (
            <ProductItem key={i} data={product} />
          ))}
        </Slider>
      );
}

export default Hero