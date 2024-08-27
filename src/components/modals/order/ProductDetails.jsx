import React from 'react';
import StarRating from '../../products/StarRating';

const ProductDetails = ({ data }) => {
  const { id, name, price, url, description, category } = data;

  return (
    <div className='bg-gray-50 rounded-xl grid justify-center gap-2 relative group text-gray-700 font-bold'>
      <div className='relative'>
        <img className="w-30 h-40" src={url} alt="product-img" />    
      </div>
      <div className='flex flex-col justify-between'>
        <h2 >{name} | {description}</h2>
        <span>price: {price}$</span>
      </div>
      <h5 className='font-medium text-gray-500'>{category}</h5>
      <StarRating productId={id} />

    </div>
  )
}

export default ProductDetails;
