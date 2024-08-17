import React from 'react'
import RoundBtn from '../general/RoundBtn'

const Banner = ({ bannerUrl, quote }) => {
  return (
    <div className='relative m-0'>
      <img src={bannerUrl} alt='banner-picture' className='w-full h-auto' />
      <div className='absolute bottom-[145px] left-[400px]'>
        <RoundBtn name='Shop now' />
      </div>
      <p className='absolute bottom-0 left-4'>{quote}</p>
    </div>
  )
}

export default Banner
