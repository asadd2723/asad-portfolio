import React from 'react'
import {brands} from '../data'
function Brands() {
  return (
    <section className='min-h-[146px] flex items-center bg-tertiary '>
      <div className="container mx-auto flex md:justify-between items-center flex-wrap justify-evenly">
        {
          brands.map((item,index)=>(
            <div key={index}>
              <img src={item.img} alt="" />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Brands