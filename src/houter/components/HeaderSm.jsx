import React from 'react'
import logo from '../img/logo.png'

export default ({ handleClick }) => {
  return (
    <div className='lg:hidden sticky top-0 z-30'>
      <div className='bg-white py-2 px-4 flex justify-between items-center'>
        <button className='font-Lexend font-bold text-darkBlue flex items-center '>
          <img src={logo} alt='logo' className='' />
          <p className='mt-4 ml-2 mb-3'>Hounter</p>
        </button>
        <div className=''>
          <button onClick={handleClick} className='mt-3'>
            <svg
              className='w-6 h-6 text-darkBlue'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
