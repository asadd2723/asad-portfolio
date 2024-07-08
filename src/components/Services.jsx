import React from 'react'
import { services } from '../data'

function Services() {
  return (
    <section id='services' className='section bg-tertiary'>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center ">
          <h2 className='section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:-left-28 before:lg:block  '>What i do for Clients</h2>
          <p className='subtitle'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione odit rerum nostrum soluta quidem eveniet laudantium enim similique placeat quaerat!</p>
        </div>
        <div className='grid lg:grid-cols-4 gap-8 '>
          {services.map((item,index)=>{
            const {icon, name, description} = item
            return <div key={index} className='bg-secondary p-6 rounded-2xl'>
                <div className='text-accent rounded-sm w-12 h-12 flex items-center justify-center mb-24 text-[28px]'>
                  {icon}
                </div>
                <h4 className='text-xl font-medium mb-2 '>{name}</h4>
                <p>{description}</p>
              </div>
          })}
        </div>
      </div>
    </section>
  )
}

export default Services