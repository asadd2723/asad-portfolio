import React from 'react'
import { MdCancel } from 'react-icons/md'

function Thank({change}) {
  return (
    <div className='bg-opacity-30  inset-0 backdrop-blur-sm flex justify-center items-center fixed z-10 '>
      <div className='flex w-[90%] sm:w-auto flex-col gap-1  text-white'>
        <button onClick={change} className=' rounded-full place-self-end'><MdCancel size={35} /></button>
        <div className='bg-primary rounded-xl h-[390px] py-8 px-6 md:py-10 md:px-8 text-center flex items-center'>
          <h1 className='text-5xl md:text-4xl font-semibold outline outline-1 outline-accent'>Thank you for Subscribe!</h1>
          
        </div>
      </div>
    </div>
  )
}

export default Thank