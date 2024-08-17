import React , { useState }from 'react';
import { NavLink } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";

const HeaderBaner = () => {
    const [isVisible, setIsVisible] = useState(true);

  const handleRemove = () => {
    setIsVisible(false);
  };
  return (
    isVisible && (
    <div className='bg-orange-500 h-12 flex col-span-2 justify-between items-center gap-3 font-medium text-white px-4'>
      <span className='cursor-pointer' onClick={handleRemove}><RxCross2 /></span>
      <div className='flex-1 flex justify-center gap-2'>
        <p>Get 50% off for this weekend!</p>
        <span> | </span>
        <NavLink to="/">Shop now!</NavLink>
      </div>
   </div>
  )
  )
}

export default HeaderBaner;