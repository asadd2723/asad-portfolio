import React from 'react'
import { social } from '../data'

function Socials() {
  return (
    <ul className='flex space-x-6'>
      {social.map((item, index)=>(
        <li className='flex justify-center items-center text-accent' key={index}>
          <a className='text-xl' href={item.href} target='_blank'>{<item.icon/>}</a>
        </li>
      ))}
    </ul>
  )
}

export default Socials