import React from 'react'
import { IoAddCircleOutline } from "react-icons/io5";
import { IoRemoveCircleOutline } from "react-icons/io5";

const Counter = ({count, add, remove}) => {
  return (
    <div className='flex text-gray-500'>
        <button onClick={remove} >
          <IoRemoveCircleOutline className=' border rounded-l-lg text-xl cursor-pointer'/>
        </button>
        <span className='border border-y-1 px-3 font-medium'>
       {count}
        </span>
        <button onClick={add} >
           <IoAddCircleOutline className='border rounded-r-lg text-xl'/>
        </button>
    </div>
  )
}

export default Counter