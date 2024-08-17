import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
  const [rate, setRate] = useState(2);
  const [hoverRate, setHoverRate] = useState(null);

  return (
    <div className='flex'>
      {[...Array(5)].map((star, index) => {
        const currentRate = index + 1;
        return (
          <label key={index}>
            <input
              type='radio'
              name='rate'
              className='hidden' // مخفی کردن ورودی رادیویی
              onClick={() => setRate(currentRate)}
            />
            <FaStar
              className={`${
                currentRate <= (hoverRate || rate)
                  ? "text-yellow-500"
                  : "text-gray-500"
              } cursor-pointer`}  // اضافه کردن کلاس cursor-pointer
              onMouseEnter={() => setHoverRate(currentRate)}
              onMouseLeave={() => setHoverRate(null)}
              onClick={() => setRate(currentRate)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
