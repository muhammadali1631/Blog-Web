'use client'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  // const Menu = document.querySelector('.me') as HTMLDivElement;
  // const OMenu = document.querySelector('.menu') as HTMLDivElement;
  // const CMenu = document.querySelector('.cross') as HTMLDivElement;
  // const openMenu = () => {
  //   Menu.style.display = 'block'; 
  //   OMenu.style.display = 'none'
  //   CMenu.style.display = 'block'
  // }
  // const closeMenu = () => {
  //   Menu.style.display = 'none';
  //   OMenu.style.display = 'block'
  //   CMenu.style.display = 'none'    
  // }
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
            {/* <h1 onClick={openMenu} className='menu text-2xl md:hidden text-white'>ALi</h1>
            <h1 onClick={closeMenu} className='cross hidden text-2xl md:hidden text-white'><RxCross2/></h1> */}

        </nav>
        </div>
        <div className='me hidden md:hidden h-40 bg-[#6482AD] w-full'>
        <ul className=' justify-center items-center gap-3 text-center text-xl '>
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