import { motion } from 'framer-motion'
import React from 'react'
import { MdCancel } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { resetFormState } from '../store/formSlice'
import { Box, CircularProgress } from '@mui/material'

function Thank() {
  const disptach = useDispatch()
  const { isSubmitting, isSubmitted, error } = useSelector((state) => state.form);

  const changed = ()=>{
    disptach(resetFormState())
  }
  if(isSubmitting){
    return <div className='bg-opacity-30  inset-0 backdrop-blur-sm flex justify-center items-center fixed z-20 '>
            <Box sx={{ display: 'flex'  }}>
              <CircularProgress />
            </Box> 
          </div>
  }
  return (
    isSubmitted && <div className='bg-opacity-30  inset-0 backdrop-blur-sm flex justify-center items-center fixed z-30 '>
      <motion.div initial={{opacity:0}} 
      animate={{
        opacity: 1,
        transition: {
          duration:0.4,
          ease:"easeOut"
        }}} 
        className='flex sm:w-auto flex-col gap-1  text-white'>
        <button onClick={changed} className=' rounded-full place-self-end'><MdCancel size={35} /></button>
        <div className='bg-primary rounded-xl w-[324px] h-[320px] md:w-[390px] px-6 md:py-10 md:px-8 text-center flex flex-col justify-center gap-3 items-center'>
          <h1 className='text-3xl md:text-4xl font-semibold w-full outline outline-1 outline-accent'>Thank you!</h1>
          <span className='my-4 text-md md:text-xl text-accent'>We appreciate your feedback. We'll get back to you shortly.</span>
        </div>
      </motion.div>
    </div>
  )
}

export default Thank