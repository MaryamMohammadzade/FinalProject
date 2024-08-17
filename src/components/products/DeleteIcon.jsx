import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
const DeleteIcon = () => {
    return (
      <div className={`w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-rose-600`}>
              <RiDeleteBin6Line className='text-2xl text-white' />
      </div>
    )
  }

export default DeleteIcon