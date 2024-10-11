import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1 className='text-center text-4xl mt-8'>Contact Us</h1>
    <div className='w-[100%] flex justify-center'>
        <form action="" className='flex flex-col w-[90%] sm:w-[60%]'>
            <input type="text" className='text-xl mt-10 bg-[#09003d85] p-3 rounded-xl border-2 border-solid border-white' placeholder='Enter Your Name'/>
            <input type="text" className='text-xl mt-10 bg-[#09003d85] p-3 rounded-xl border-2 border-solid border-white' placeholder='Enter Your Name'/>
            <input type="text" className='text-xl mt-10 bg-[#09003d85] p-3 rounded-xl border-2 border-solid border-white' placeholder='Enter Your Phone'/>

            <textarea name="" className='h-[20vh] text-xl my-10 mb-20 bg-[#09003d85] p-3 rounded-xl border-2 border-solid border-white' placeholder='Message'></textarea>
            
        </form>
    </div>
    </div>
  )
}

export default Contact