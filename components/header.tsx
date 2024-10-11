'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { IoMenu } from "react-icons/io5";


const Header = () => {
  const [attr, setAttr] = useState('hidden'); // Changed 'let' to 'const'
  const [attr2, setAttr2] = useState('block'); // Changed 'let' to 'const'
  const [isOpen, setIsOpen] = useState(false); // Changed 'let' to 'const';

  const openMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
    setAttr(isOpen ? 'hidden' : 'block'); // Set attr based on menu state
    setAttr2(isOpen ? 'block' : 'hidden'); // Set attr based on menu state
  }

  return (
    <header className=''>
        <div className='flex justify-between items-center py-6 px-6 sm:px-12 backdrop-blur-md bg-[#09003d]'>
        <Link href='/'><h1 className='text-2xl font-bold'>BlogByAli</h1></Link>
        <nav>
            <ul className='hidden md:flex gap-8 text-xl '>
                <Link href='/'><li>Home</li></Link>
                <Link href='/about'><li>About</li></Link>
                <Link href='/contact'><li>Contact</li></Link>
                <Link href='/blogs'><li>Blog</li></Link>
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