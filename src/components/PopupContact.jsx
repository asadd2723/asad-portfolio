import React from 'react'
import { MdCancel } from 'react-icons/md'

function PopupContact({change}) {
  
  return (
     <div className='bg-opacity-30  inset-0 backdrop-blur-sm flex justify-center items-center fixed z-10'>
      <div className='flex w-[90%] sm:w-auto flex-col gap-1  text-white'>
        <button onClick={change} className=' rounded-full place-self-end'><MdCancel size={35} /></button>
        <div className='bg-tertiary rounded-xl py-6 px-4 md:py-8 md:px-6 text-center'>
          <h1 className='text-2xl md:text-3xl font-semibold outline outline-1 outline-accent'>Click here to Subscribe!</h1>
          <p className=' my-4 text-lg md:text-xl  text-accent'>Let's connect for more project and work</p>
          <form name='contact-us' className='space-y-5 w-full max-w-[780px]' method='POST'  data-netlify="true" >
            <input type="hidden" name="form-name" value="contact-us" />
            <div className='flex gap-4'>
              <input className='rounded-lg input ' type="text" placeholder='Enter your name' name='Name' required/>
              <input className='rounded-lg input' type="email" placeholder='Enter your email' name='Email' required/>
            </div>
            <input type="text" placeholder='Subject' className="rounded-lg input" name='Subject' required/>
            <textarea className='rounded-lg textarea' placeholder='Enter your Message' name='Message' required></textarea>
            <button type='submit' className='rounded-lg btn btn-lg bg-accent hover:bg-accent-hover '>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PopupContact