import data from '@/data/data'
import Link from 'next/link'
import React from 'react'

const MainPageBlog = () => {
  return (
    <div className=''>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-bold my-10'>Programming Blogs</h1>
            <div className='flex flex-wrap justify-around w-[100%] gap-10 '>
                {data.filter((item) => item.tags && item.tags.includes('JavaScript')).map((item) => (
                    <div className='bg-[#09003d] text-[#fff] p-8 gap-5 rounded-xl w-[350px] grid justify-between box-shad text-center sm:w-[500px] cursor-pointer mb-7 scale-in-bottom hover:bg-[#090111] hover:duration-700 hover:ease-in-out'>
                        <img src={item.image} alt={item.title} className='w-full h-44 object-cover rounded-md' />
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
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-bold my-10'>Personal Development</h1>
            <div className='flex flex-wrap justify-around w-[100%] gap-10 '>
                {data.filter((item) => item.tags && item.tags.includes('personal development')).map((item) => (
                    <div className='bg-[#09003d] text-[#fff] p-8 gap-5 rounded-xl w-[350px] grid justify-between box-shad text-center sm:w-[500px] cursor-pointer mb-7 scale-in-bottom1 hover:bg-[#090111] hover:duration-700 hover:ease-in-out'>
                        <img src={item.image} alt={item.title} className='w-full h-44 object-cover rounded-md' />
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
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-bold my-10'>Health & Fitness</h1>
            <div className='flex flex-wrap justify-around w-[100%] gap-10 '>
                {data.filter((item) => item.tags && item.tags.includes('health')).map((item) => (
                    <div className='bg-[#09003d] text-[#fff] p-8 gap-5 rounded-xl w-[350px] grid justify-between box-shad text-center sm:w-[500px] cursor-pointer mb-7 scale-in-bottom1 hover:bg-[#090111] hover:duration-700 hover:ease-in-out'>
                        <img src={item.image} alt={item.title} className='w-full h-44 object-cover rounded-md' />
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
    </div>
  )
}

export default MainPageBlog