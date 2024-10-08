import React, { useState } from 'react';
import { useBasket } from '../../store/basket';
import { FiShoppingCart } from "react-icons/fi";
import Favorite from './Favorite';
import DeleteIcon from './DeleteIcon';
import StarRating from './StarRating';
import { MdOutlineAddTask } from "react-icons/md";
import OrderModal from '../modals/order/OrderModal';



const ProductItem = ({ data }) => {
  const { id, name, price, url, description, category } = data;
  const {  items } = useBasket((state) => ({
    items: state.items,
    removeItem: state.actions.removeItem
  }));

  const isInBasket = items.some((item) => item.id === id);
  var [isOpen, setIsOpen]=useState(false);
  return (
    <div className='p-4 bg-gray-50 rounded-xl grid justify-center gap-2 relative group text-gray-700 font-bold'>
      <div className='relative'>
        <img className="w-50 h-60" src={url} alt="product-img" />
        <div className={`absolute inset-0 ${isInBasket?'bg-green-400' : 'bg-gray-400'} opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-md`}></div>
        <div className='absolute inset-0 flex justify-center items-center'>
          <div className='w-16 h-16 bg-white rounded-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          {isInBasket ? (
            <>
              <MdOutlineAddTask className='text-green-600 text-3xl cursor-pointer'
                onClick={()=>setIsOpen(true)}
                />
                {
                  isOpen && <OrderModal data={data} onClose={()=>setIsOpen(false)} />
                }
               
              </>
            ) : (
              <>
                <FiShoppingCart
                  className='text-gray-600 text-3xl cursor-pointer'
                  onClick={()=>setIsOpen(true)}
                />
                {
                  isOpen && <OrderModal data={data} onClose={()=>setIsOpen(false)} />
                }
              </>
            )}
            
          </div>
        </div>
        <div className='absolute top-2 right-2'>
        {isInBasket ? (
          <>
              <DeleteIcon  onClick={()=>setIsOpen(true)}  />
                {
                  isOpen && <OrderModal  data={data} onClose={()=>setIsOpen(false)} />
                }
          </>
            ) : (
              <Favorite id={id} />
            )}
        </div>
      </div>
      <div className='flex justify-between'>
        <h2>{name} | {description}</h2>
        <span>{price}$</span>
      </div>
      <h5 className='font-medium text-gray-500'>{category}</h5>
      <StarRating productId={id} />

    </div>
  )
}

export default ProductItem;
