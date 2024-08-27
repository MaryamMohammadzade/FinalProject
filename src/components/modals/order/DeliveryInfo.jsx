import React from 'react'
const DeliveryInfo = ({icon, title, info}) => {
  return (
    <div className='flex gap-2'>
        <div className='flex items-center text-2xl text-gray-500'>
           {icon}
        </div>
        <div className='text-gray-700 '>
            <h2>{title}</h2>
            <p>{info}</p>
        </div>
    </div>
  )
}

export default DeliveryInfo