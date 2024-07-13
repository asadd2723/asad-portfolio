import React, { useState } from 'react'
import Image from '../assets/img/about.webp'
import PopupContact from './PopupContact'
import { useDispatch } from 'react-redux'
import { popForm } from '../store/formSlice'

function About() {
  const dispatch = useDispatch()
  return (
    <section id='about' className='section bg-secondary'>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl' src={Image} alt="" />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className='flex flex-col '>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:absolute before:content-about relative before:opactiy-40 before:hidden before:-top-[2rem] before:lg:block '>
                Jane Doe
              </h2>
              <p className='text-accent mb-4'>Freelance Web Developer</p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis non saepe, explicabo totam a incidunt eveniet similique quidem et eligendi! <br /> 
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, soluta?
              </p>
            </div>
            <button onClick={()=>dispatch(popForm(true))} className='btn btn-md bg-accent hover:bg-accent-hover transition-all cursor-pointer'>Contact Me</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About