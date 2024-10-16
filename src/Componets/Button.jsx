import React from 'react'
import { IoIosReturnRight } from "react-icons/io";


function Button({title="Get Started"},) {
  return (
    <div className='min-w-40  px-4 py-2   bg-zinc-100  text-black rounded-full flex items-center justify-between'>
        <span className='font-medium text-sm'> {title}</span>
        <IoIosReturnRight />

    </div>
  )
}

export default Button