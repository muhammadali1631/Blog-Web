'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { IoMenu } from "react-icons/io5";


const Header = () => {
  let [Attr, setAttr] = useState('hidden') 
  let [Attr2, setAttr2] = useState('block') 
  let [isOpen, setIsOpen] = useState(false);


  const openMenu = () => {
    setIsOpen(!isOpen);
    setAttr(isOpen ? 'hidden' : 'block');
    setAttr2(isOpen ? 'block' : 'hidden')
  }

  return (
    <header className=''>
        <div className='flex justify-between items-center py-6 px-12 backdrop-blur-md bg-[#09003d]'>
        <Link href='/'><h1 className='text-2xl font-bold'>BlogByAli</h1></Link>
        <nav>
            <ul className='hidden md:flex gap-8 text-xl '>
                <Link href='/'><li>Home</li></Link>
                <Link href='/about'><li>About</li></Link>
                <Link href='/contact'><li>Contact</li></Link>
                <Link href='/blogs'><li>Blog</li></Link>
            </ul>
            <h1 onClick={openMenu} className={`${Attr2} cursor-pointer text-3xl md:hidden text-white`}><IoMenu/></h1>
            <h1 onClick={openMenu} className={`${Attr} text-3xl md:hidden text-white`}><RxCross2/></h1>
        </nav>
        </div>
        <div className={`me md:hidden h-40 bg-[#09003d] w-full ${Attr}`}>
        <ul className='grid justify-center  items-center gap-3 text-center text-xl '>
                <Link href='/'><li>Home</li></Link>
                <Link href='/about'><li>About</li></Link>
                <Link href='/contact'><li>Contact</li></Link>
                <Link href='/blog'><li>Blog</li></Link>
            </ul>
        </div>
    </header>
  )
}

export default Header