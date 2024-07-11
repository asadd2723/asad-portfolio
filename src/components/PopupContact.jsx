import React, { useState } from 'react'
import { MdCancel } from 'react-icons/md'
import Thank from './Thank';

function PopupContact({change}) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  };

  if (submitted) {
    return <Thank  change={()=>setSubmitted(false)} />;
  }
  
  return (
     <div className='bg-opacity-30  inset-0 backdrop-blur-sm flex justify-center items-center fixed z-10'>
      <div className='flex w-[90%] sm:w-auto flex-col gap-1  text-white'>
        <button onClick={change} className=' rounded-full place-self-end'><MdCancel size={35}  /></button>
        <div className='bg-primary rounded-xl py-8 px-6 md:py-10 md:px-8 text-center'>
          <h1 className='text-2xl md:text-3xl font-semibold outline outline-1 outline-accent'>Click here to Subscribe!</h1>
          <p className=' my-4 text-lg md:text-xl  text-accent'>Let's connect for more project and work</p>
          <form onSubmit={handleSubmit} name='contact-us' className='space-y-5 w-full max-w-[780px]' method='POST'  data-netlify="true" >
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