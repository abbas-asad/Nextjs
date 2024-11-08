import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='bg-[#1e3a5f] flex justify-center items-center w-screen text-center font-medium text-[1em] py-4 tracking-[0.5px]'>
            <p className='text-white'>&copy; 2024 <Link href='https://github.com/abbas-asad' className='text-[#ffe51f]'>Abbas Asad</Link> Portfolio</p>
        </footer>
    )
}

export default Footer
