import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#09003d] w-full py-5'>
        <ul className='w-full flex justify-center gap-10 py-3'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/contact"><li>Contact</li></Link>
            <Link href="/blogs"><li>Blog</li></Link>
        </ul>
        <p className='text-center'> &#169; CopyRight </p>
    </div>
    )
}

export default Footer