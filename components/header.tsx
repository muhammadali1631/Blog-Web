'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { IoMenu } from "react-icons/io5";


const Header = () => {
  const [attr, setAttr] = useState('hidden'); 
  const [attr2, setAttr2] = useState('block');
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
    setAttr(isOpen ? 'hidden' : 'block');
    setAttr2(isOpen ? 'block' : 'hidden');
  }

  return (
    <header className=''>
        <div className='flex justify-between items-center py-6 px-6 sm:px-12 backdrop-blur-md bg-[#09003d]'>
        <Link href='/'><h1 className='text-2xl font-bold hover:underline hover:scale-110 hover:duration-300 hover:ease-in-out'>BlogByAli</h1></Link>
        <nav>
            <ul className='hidden md:flex gap-8 text-xl '>
                <Link href='/'><li className='hover:underline hover:scale-110 hover:duration-300 hover:ease-in-out' >Home</li></Link>
                <Link href='/about'><li className='hover:underline hover:scale-110 hover:duration-300 hover:ease-in-out'>About</li></Link>
                <Link href='/contact'><li className='hover:underline hover:scale-110 hover:duration-300 hover:ease-in-out'>Contact</li></Link>
                <Link href='/blogs'><li className='hover:underline hover:scale-110 hover:duration-300 hover:ease-in-out'>Blog</li></Link>
            </ul>
            <h1 onClick={openMenu} className={`menu text-2xl md:hidden text-white ${attr2}`}><IoMenu/></h1>
            <h1 onClick={openMenu} className={`cross ${attr} text-2xl md:hidden text-white`}><RxCross2/></h1> 
        </nav>
        </div>
        <div className={`me md:hidden h-40 bg-[#09003d] w-full ${attr}`}>
        <ul className='grid justify-center  items-center gap-3 text-center text-xl '>
                <Link href='/'><li>Home</li></Link>
                <Link href='/about'><li>About</li></Link>
                <Link href='/contact'><li>Contact</li></Link>
                <Link href='/blogs'><li>Blog</li></Link>
            </ul>
        </div>
    </header>
  )
}

export default Header