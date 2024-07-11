import React from 'react'
import Logo from '../assets/img/logo.svg'
import { social } from '../data'
import { Link } from 'react-scroll'
function Footer() {
  return (
    <footer className='bg-tertiary py-12'>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-6 items-center justify-center  ">
            {social.map((item,index)=> (
              <a className='text-accent text-xl' target='_blank' href={item.href} key={index}><item.icon/></a>
            )
            )}
          </div>
          <div>
            <Link
            activeClass='active' 
            spy={true} 
            smooth={true} 
            duration={500} 
            offset={-70} 
            className='transition-all duration-300 text-2xl cursor-pointer' to='home'>
            <img src={Logo} alt="" />
            </Link>
          </div>
          <p>&copy; 2024 Asad ullah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer