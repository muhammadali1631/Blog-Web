import data from '@/data/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
type Blogs = {
  title: string
}

const BlogSider = (props:Blogs) => {
  return (
    <div className='bg-[#09003d] w-[20%] h-[200vh]  mr-10 mt-10 rounded-xl hidden lg:block'>
        {data.filter((item) => item.title !== props.title).map((item) => (
            <div key={item.title} className='bg-[#09003d] text-[#fff] p-4 gap-2 rounded-xl w-[100%] grid justify-between border-white border-3 text-center cursor-pointer mb-7 scale-in-bottom hover:bg-[#090111] hover:duration-700 hover:ease-in-out'>
              {item.link && (
                    <Link href={item.link}>
                <Image src={item.image} alt={item.title} className='w-full h-44 object-cover rounded-md' width={0} height={0}/>
                <h2 className='text-xl font-bold'>{item.title}</h2>
                
                    </Link>
                )}
            </div>
        ))}
    </div>
  )
}

export default BlogSider