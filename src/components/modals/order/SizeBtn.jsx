import React from 'react'

const SizeBtn = ({title}) => {
  return (

      <div>
        <button className='flex items-center justify-center w-8 h-8 bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded'>
          {title}
        </button>
      </div>

  )
}

export default SizeBtn