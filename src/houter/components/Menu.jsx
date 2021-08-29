import React from 'react'
import logo from '../img/logo.png'

export default ({ isOpen, handleClick }) => {
  return (
    <div
      className={`lg:hidden ${
        !isOpen && 'hidden'
      } absolute inset-0 h-full bg-white z-40 px-4 sticky top-0`}
    >
      <div className='py-2 flex justify-between items-center text-center'>
        <button className='font-Lexend font-bold text-darkBlue flex items-center '>
          <img src={logo} alt='logo' className='' />
          <p className='mt-4 ml-2 mb-3'>Hounter</p>
        </button>
        <div className=''>
          <button onClick={handleClick} className='mt-3'>
            {!isOpen ? (
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
            ) : (
              <svg
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className='mt-10  text-center'>
        <h1 className='text-sm font-semibold text-darkBlue'>Properties</h1>
        <ul className='text-sm text-gray-400 mt-4 space-y-2 flex flex-col justify-center'>
          <button className='block hover:text-green-500 font-medium'>
            Houses
          </button>
          <button className='block hover:text-green-500 font-medium'>
            Apartments
          </button>
          <button className='block hover:text-green-500 font-medium'>
            Villas
          </button>
        </ul>
      </div>
      <div className='mt-10 text-center'>
        <h1 className='text-[14px] font-semibold text-darkBlue'>Blog</h1>
        <ul className='text-sm text-gray-400 mt-4 space-y-2 flex flex-col justify-center'>
          <button className='block hover:text-green-500 font-medium'>
            Things we need to check
          </button>
          <button className='block hover:text-green-500 font-medium'>
            7 Ways to distinguish quality
          </button>
          <button className='block hover:text-green-500 font-medium'>
            12 Things To Know
          </button>
        </ul>
      </div>
      <div className='mt-10 text-center'>
        <h1 className='text-[14px] font-semibold text-darkBlue'>Contact</h1>
        <ul className='text-sm text-gray-400 mt-4 space-y-2 flex flex-col justify-center'>
          <button className='block hover:text-green-500 font-medium'>
            2464 Royal Ln. Mesa, New Jersey 45463
          </button>
          <button className='block hover:text-green-500 font-medium'>
            (671) 555-0110
          </button>
          <button className='block hover:text-green-500 font-medium'>
            info@hounter.com
          </button>
        </ul>
      </div>
    </div>
  )
}
