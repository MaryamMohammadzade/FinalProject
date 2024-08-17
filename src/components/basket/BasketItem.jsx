import React from 'react'


const BasketItem = ({product, remove}) => {
  const {name, price, quantity, url}= product;
  return (
    <div className='p-4 bg-gray-200 grid justify-center gap-2'>
      <img className=" w-34 h-40" src={url} alt="product-img"/>
      <h2 className='font-bold'> {name}</h2>
      <div className='flex-col justify-between'>
        <div className=''>
          <span className='font-medium'>Price: </span>
          <span className=' font-medium'>{price}</span>
        </div>       
        <div>
          <span className=' font-medium'>count:</span>
          <span className=' font-medium'>{quantity}</span>
        </div>
      </div>
      <button onClick={()=>remove(product)} className='p-1 rounded-md block bg-rose-600 text-white'>Remove Item</button>
     
    </div>
 
  )
}

export default BasketItem