import React from 'react'
import { skills } from '../data'
import { motion } from 'framer-motion'

function Skills() {
  return (
    <section className='bg-tertiary py-12'>
      <div className="container mx-auto">
        <div className='grid grid-cols-8 md:grid-flow-row'>
          {skills.map((item, index)=>(
            <div className='flex items-center justify-center' key={index}>
              <img className='overflow-x-hidden' src={item.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills