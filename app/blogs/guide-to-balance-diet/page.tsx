import React from 'react'
import data from '@/data/data'
import BlogSider from '@/components/blogsider'
import Image from 'next/image'

const Diet = () => {
  return (
    <div className='h-full w-[100%] flex justify-center'>
    <div className='w-[100%] lg:w-[80%] p-10 flex flex-col items-center'>
        <Image src={data[4].image} alt="Latest web devlopment" className='scale-in-center w-[90%] md:h-[50vh] object-cover rounded-xl md:w-[85%]' width={0} height={0}/>
        <h1 className='my-10 text-3xl font-bold'>{data[4].title}</h1>
        <p className='text-center w-[85%] text-xl'>{data[4].description.content}</p>
        <div className='w-[85%]'>
        <h3 className='my-10 text-2xl font-bold'>{data[4].description.heading1}</h3>
        <p className='font-semibold mb-16 text-xl'>{data[4].description.des1}</p>
        <h3 className='my-10 text-2xl font-bold'>{data[4].description.heading2}</h3>
        <p className='font-semibold mb-16 text-xl'>{data[4].description.des2}</p>
        <h3 className='my-10 text-2xl font-bold'>{data[4].description.heading3}</h3>
        <p className='font-semibold mb-16 text-xl'>{data[4].description.des3}</p>
        <h3 className='my-10 text-2xl font-bold'>{data[4].description.heading4}</h3>
        <p className='font-semibold mb-16 text-xl'>{data[4].description.des4}</p>
        <h3 className='my-10 text-2xl font-bold'>{data[4].description.heading5}</h3>
        <p className='font-semibold mb-16 text-xl'>{data[4].description.des5}</p>
        </div>
    </div>
    <BlogSider title={data[4].title}/>
</div>
  )
}

export default Diet