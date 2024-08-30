import React from 'react'


const CartItem = ({product}) => {
  const {name,description, price, quantity, url}= product;
  return (
    <div className='flex gap-2 my-2 '>
       <div className='relative'>
             <img className=" w-20 h-20" src={url} alt="product-img"/>
             <span className='bg-gray-300 rounded-full flex justify-center items-center w-7 h-7 p-1 font-bold text-orange-500 absolute right-0 bottom-0'>{quantity}</span>
       </div>
       <div>
            <h2 className='font-bold text-sm'> {name}</h2>
            <h5>{description}</h5>
       </div>
       <div className='flex justify-center flex-grow'>
           <span className=' font-medium'>{quantity*price} $</span>
       </div>
    </div>
  )
}

export default CartItem