import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { useBasket } from '../../store/basket';
import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
import CartModal from '../modals/cart/CartModal';

const Header = () => {
  const { items } = useBasket((state) => state)
  let totalBasket = 0;
  for (let i = 0; i < items.length; i++) {
    totalBasket = totalBasket + items[i].quantity
  }
  var [isOpen, setIsOpen]=useState(false);
  var url = require('../../assets/img/1.png');

  return (
    <header className='p-2 bg-gray-50 mb-2 flex justify-between items-center text-lg font-bold text-gray-700'>
      <div className='flex items-center'>
        <img className="h-[25%] w-[45%] m-0" src={url} alt='logo' />
        <div className='h-10 flex items-center gap-4 px-4'>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/home/products">Products</NavLink>
          <NavLink className="flex items-center gap-1" to="/home/basket">Basket</NavLink>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <NavLink className="flex items-center gap-1" to="/"><VscAccount />Account</NavLink>
        <div className=' cursor-pointer flex items-center gap-1' onClick={()=>setIsOpen(true)}>
           <FiShoppingCart />
           Basket
        </div>
           {
             isOpen && <CartModal onClose={()=>setIsOpen(false)} />
           }
      
      </div>
    </header>
  )
}

export default Header
