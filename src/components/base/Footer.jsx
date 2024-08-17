import React from 'react';
import { useBasket } from '../../store/basket';
import useFavoriteStore from '../../store/useFavoriteStore'; // مسیر صحیح استور خود را وارد کنید
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { GrBasket } from "react-icons/gr";

const Footer = () => {
  const { items, invoice } = useBasket((state) => state);
  const { favoriteCount } = useFavoriteStore(); // دریافت تعداد علاقه‌مندی‌ها

  let totalBasket = 0;
  for (let i = 0; i < items.length; i++) {
    totalBasket = totalBasket + items[i].quantity;
  }

  return (
    <div className='bg-orange-500 h-14 flex col-span-2 justify-between items-center gap-3 font-medium text-white px-4'>
      <div className='flex justify-between items-center gap-2'>
        <GrBasket />
        <span>{totalBasket} Items added to basket</span>
        <FiHeart className='text-2xl'/>
        <span>{favoriteCount} Wish list</span> {/* تعداد محصولات علاقه‌مندی‌ها */}
      </div>
      <div className='flex justify-between items-center gap-2'>
        <FiShoppingCart className='text-2xl' />
        <span>{invoice.total} $</span>
      </div>
    </div>
  );
};

export default Footer;
