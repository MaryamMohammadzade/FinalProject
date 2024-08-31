import React from 'react'
const Banner = ({ bannerUrl, quote }) => {
  return (
    <div className='relative m-0'>
      <img src={bannerUrl} alt='banner-picture' className='w-full h-auto' />
      <div className='absolute bottom-[16%] left-[18%] md:bottom-[19%] md:left-[18%] lg:bottom-[21%] lg:left-[20%]'>
        <button
          className='rounded-full border-2 py-1 px-3 font-bold lg:py-2 lg:px-10 lg:text-xl border-orange-500 text-orange-500 bg-gradient-to-l from-orange-100 to-white transition-transform duration-200 ease-in-out transform hover:scale-105'
         >
           Shop Now
         </button>
      </div>
      <p className='absolute bottom-0 left-4'>{quote}</p>
    </div>
  )
}

export default Banner
