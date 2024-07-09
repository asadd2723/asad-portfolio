import React from 'react'
import TestimonialSlider from './TestimonialSlider'

function Testimonials() {
  return (
    <section id='testimonials' className='section bg-secondary'>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center ">
          <h2 className='section-title before:content-testimonials relative before:absolute before:-top-[2rem] before:opacity-40 before:-left-64 before:hidden before:lg:block '>What other people say</h2>
          <p className='subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci soluta error eveniet laudantium aut ad odio, modi odit eum corporis!</p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  )
}

export default Testimonials