import React from 'react'
import Projects from './Projects'

function Portfolio() {
  return (
    <section id='portfolio' className='section bg-primary min-h-[1200px]'>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block '>My latest work</h2>
          <p className='subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ex quam animi cum pariatur necessitatibus accusantium iusto, mollitia odit dolores?</p>
        </div>
        <Projects />
      </div>
    </section>
  )
}

export default Portfolio