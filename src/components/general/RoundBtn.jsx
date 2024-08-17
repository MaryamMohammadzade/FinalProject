import React from 'react'

const RoundBtn = ({ name }) => {
  return (
    <button
      className='rounded-full border-2 py-2 px-10 font-bold text-xl border-orange-500 text-orange-500 bg-gradient-to-l from-orange-100 to-white transition-transform duration-200 ease-in-out transform hover:scale-105'
    >
      {name}
    </button>
  )
}

export default RoundBtn
