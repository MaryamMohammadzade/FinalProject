import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductItem from '../products/ProductItem';
import Slider from 'react-slick';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://dmhdwnzecklmmubttkyx.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtaGR3bnplY2tsbW11YnR0a3l4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUxMDQ0MjIsImV4cCI6MjA0MDY4MDQyMn0.wiCmiROLJZa_5L7S7cG_r2HTyAyc8LathhJz2KWP-BQ");

const Hero = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    setLoading(true); 
    const { data } = await supabase.from("products").select();
    setProducts(data || []); 
    setLoading(false); 
  }

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
    
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Slider {...settings}>
          {products.length > 0 ? (
            products.map((product, i) => (
              <ProductItem key={i} data={product} />
            ))
          ) : (
            <p>No products available</p> 
          )}
        </Slider>
      )}
    </div>
  );
}

export default Hero;