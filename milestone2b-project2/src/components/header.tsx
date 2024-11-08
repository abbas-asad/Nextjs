import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='w-screen shadow-md  shadow-slate-800'>
      <nav className="navbar flex justify-between items-center md:flex-col md:py-3 md:px-4 md:text-[.9em] tracking-[0.5px] bg-[#1e3a5f] py-4 px-5">
        <div className="logo font-semibold text-[2em]">
          <span className='text-[#fff]'>Port</span>
          <span className='text-[#ffe51f]'>folio</span>
        </div>
        <ul className="nav-links flex gap-[30px] py-2 md:gap-5">
          <li className='text-white font-semibold text-[1.1em] transition-colors duration-300 ease-in-out  hover:text-[#ffe51f] after:block after:w-0 after:h-[2px] after:bg-[#ffe51f] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full'><Link href="/">Home</Link></li>
          <li className='text-white font-semibold text-[1.1em] transition-colors duration-300 ease-in-out  hover:text-[#ffe51f] after:block after:w-0 after:h-[2px] after:bg-[#ffe51f] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full'><Link href="/about">About</Link></li>
          <li className='text-white font-semibold text-[1.1em] transition-colors duration-300 ease-in-out  hover:text-[#ffe51f] after:block after:w-0 after:h-[2px] after:bg-[#ffe51f] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full'><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>

  )
}

export default Header
