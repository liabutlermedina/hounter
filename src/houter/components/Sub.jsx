import React from 'react'
import subscribe from '../img/subscribe.jpg'
import email from '../img/email.png'

export default () => {
  return (
    <div className='mt-20 hidden lg:block'>
      <div className='rounded-2xl overflow-hidden relative h-[312px] grid place-content-center'>
        <div className='relative z-10 '>
          <h1 className='text-center text-darkBlue font-Lexend text-3xl font-semibold mr-5'>
            Subscribe For More Info <br /> And Updates From Hounter
          </h1>
          <div className='relative mt-4'>
            <img src={email} alt='email' className='absolute mt-2 ml-6' />
            <button className='bg-green-500 text-white px-4 py-2 text-sm rounded-3xl absolute right-0 font-semibold m-[1px] hover:bg-green-600'>
              Submit
            </button>
            <input
              type='search'
              placeholder='Your email here'
              className='rounded-3xl w-full border border-gray-300 text-gray-500 text-sm pl-16 py-2 focus:border-green-500'
            />
          </div>
        </div>
        <img
          className='absolute inset-0 h-full object-cover'
          src={subscribe}
          alt=''
        />
      </div>
    </div>
  )
}
