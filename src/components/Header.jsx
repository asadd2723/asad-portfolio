import React, { useEffect, useState } from 'react'
import Logo from '../assets/img/logo.svg'
import Nav from './Nav'
import NavMobile from './NavMobile'
import Socials from './Socials'

function Header() {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      return window.scrollY > 50 ? setBg(true) : setBg(false)
    })
    
  });
  return (
    <header className={`${bg ? "bg-tertiary h-20": "h-24"} flex items-center fixed top-0 w-full text-white transition-all duration-300 z-10`}>
      <div className="container mx-auto h-full flex items-center justify-between">
        <a className='text-2xl' href="">
          <img src={Logo} alt="" />
        </a>
        <div className='hidden lg:block'>
          <Nav />
        </div>
        <div className='hidden lg:block'>
          <Socials />
        </div>
        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  )
}

export default Header