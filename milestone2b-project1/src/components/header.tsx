import React from 'react'
import Link from 'next/link'
import './header.css' 

const Header = () => {
  return (
    <header>
    <nav className="navbar">
      <div className="logo">
      <span className='red'>Port</span>
      <span className='yellow'>folio</span>
      </div>
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>

  )
}

export default Header
