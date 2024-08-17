import React  from 'react';
import products from '../myArray/products';
import ProductItem from '../components/products/ProductItem';

const ProductsList = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
      {products.map((product, i) => {
        return (
         <ProductItem key={i} data={product} />
        )
      })}
    </div>

  );
};
export default ProductsList;