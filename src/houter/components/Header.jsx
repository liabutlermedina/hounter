import React from 'react'
import logo from '../img/logo.png'

export default () => {
  return (
    <div className=' justify-between relative hidden lg:flex'>
      <div className='flex gap-2 w-1/2 items-start'>
        <button className='font-Lexend font-bold text-darkBlue flex items-center'>
          <img src={logo} alt='logo' className='' />
          <p className='mt-4 ml-2 mb-3'>Hounter</p>
        </button>
      </div>
      <div className='flex justify-between pl-8 w-1/2 items-center absolute z-10 right-0'>
        <button className='font-Lexend font-bold text-white bg-white/10 mt-2 py-1.5 px-3 border border-white/10 rounded-3xl text-sm hover:bg-green-500'>
          About Us
        </button>
        <button className='font-Lexend font-bold text-white bg-white/10 mt-2 py-1.5 px-3 border border-white/10 rounded-3xl text-sm hover:bg-green-500'>
          Articles
        </button>
        <button className='font-Lexend font-bold text-white bg-white/10 mt-2 py-1.5 px-3 border border-white/10 rounded-3xl text-sm hover:bg-green-500'>
          Properties
        </button>
        <button className='font-Lexend font-bold text-darkGreen bg-green-100 mt-2 py-2.5 px-4 border border-white/10 rounded-3xl text-sm ml-2 hover:text-white hover:bg-green-500'>
          Sign Up!
        </button>
      </div>
    </div>
  )
}
