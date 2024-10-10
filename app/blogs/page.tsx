"use client"
import React from 'react'
import data from '../../data/data'
import Link from 'next/link'
import Image from 'next/image'

const LatestWebDevlopment = () => {

  return (
    <div>
       <h1 className='text-4xl text-center my-10 font-semibold'>All Blogs</h1>
       <div className='flex flex-wrap w-[100%] justify-around gap-10'>
                {data.map((item) => (
                    <div className='bg-[#09003d] text-[#fff] p-8 gap-5 rounded-xl w-[350px] grid justify-between box-shad text-center sm:w-[500px] cursor-pointer mb-7 scale-in-bottom1 hover:bg-[#090111] hover:duration-700 hover:ease-in-out'>
                        <Image src={item.image} alt={item.title} className='w-full h-44 object-cover rounded-md' width={0} height={0}/>
                        <h2 className='text-2xl font-bold'>{item.title}</h2>
                        <p className='text-md'>{typeof item.description === 'string' ? item.description : item.description.content}</p>
                        {item.link && (
                            <Link href={item.link}>
                                <button className='p-4 text-xl bg-[#060123] rounded-full'>Read More</button>
                            </Link>
                        )}
                    </div>
                ))}
                </div>
    </div>
  )
}

export default LatestWebDevlopment