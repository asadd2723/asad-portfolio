import React from 'react'
import { MdCancel } from 'react-icons/md'

import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { popForm, submitForm } from '../store/formSlice';

function PopupContact() {
  const {isSubmitting, popform} = useSelector(state=>state.form)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    dispatch(submitForm(formData));
  };


  console.log(popform);
  return (
     popform && <div className=' bg-opacity-30  inset-0 backdrop-blur-sm flex justify-center items-center fixed z-10'>
      <motion.div
      initial={{opacity:0}} 
  animate={{
    opacity: 1,
    transition: {
      duration:0.4,
      ease:"easeOut"
    }}} 
    className='flex w-[90%] sm:w-auto flex-col gap-1 transition-all duration-500 text-white'>
        <button onClick={()=>dispatch(popForm(false))} className=' rounded-full place-self-end'><MdCancel size={35}  /></button>
        <div className='bg-primary rounded-xl py-8 px-6 md:py-10 md:px-8 text-center'>
          <h1 className='text-2xl md:text-3xl font-semibold outline outline-1 outline-accent'>Click here to Subscribe!</h1>
          <p className=' my-4 text-lg md:text-xl  text-accent'>Let's connect for more project and work</p>
          <form name='contact-us' className='space-y-5 w-full max-w-[780px]' method='POST' onSubmit={handleSubmit} data-netlify="true" >
            <input type="hidden" name="form-name" value="contact-us" />
            <div className='flex gap-4'>
              <input className='rounded-lg input ' type="text" placeholder='Enter your name' name='Name' required/>
              <input className='rounded-lg input' type="email" placeholder='Enter your email' name='Email' required/>
            </div>
            <input type="text" placeholder='Subject' className="rounded-lg input" name='Subject' required/>
            <textarea className='rounded-lg textarea' placeholder='Enter your Message' name='Message' required></textarea>
            <button type='submit' disabled={isSubmitting} className='rounded-lg btn btn-lg bg-accent hover:bg-accent-hover '>Send Message</button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

export default PopupContact