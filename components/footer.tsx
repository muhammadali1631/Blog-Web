import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#09003d] w-full py-5'>
        <ul className='w-full flex justify-center gap-10 py-3'>
            <Link href="/"><li className='hover:underline hover:scale-110 hover:duration-300 hover:ease-in-out'>Home</li></Link>
            <Link href="/about"><li className='hover:underline hover:scale-110 hover:duration-300 hover:ease-in-out'>About</li></Link>
            <Link href="/contact"><li className='hover:underline hover:scale-110 hover:duration-300 hover:ease-in-out'>Contact</li></Link>
            <Link href="/blogs"><li className='hover:underline hover:scale-110 hover:duration-300 hover:ease-in-out'>Blog</li></Link>
        </ul>
        <p className='text-center'> &#169; CopyRight </p>
    </div>
    )
}

export default Footer