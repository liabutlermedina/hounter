import React from 'react'
import logo from '../img/logo.png'
import fb from '../img/fb.png'
import twitter from '../img/twitter.png'
import insta from '../img/insta.png'

export default () => {
  return (
    <div className='my-20  justify-between hidden lg:flex'>
      <div className=''>
        <button className='flex gap-2 items-center'>
          <img src={logo} alt='' className='' />
          <h1 className='text-[14px] font-semibold text-darkBlue'>Hounter</h1>
        </button>
        <p className='mt-4 text-xs text-gray-400'>
          We provide information about properties <br /> such as houses, villas
          and apartments <br /> to help people find their dream home
        </p>
        <div className='inbuttonne-flex gap-3 items-center mt-5'>
          <button className=''>
            <img src={fb} alt='' className='' />
          </button>
          <button className=''>
            <img src={twitter} alt='' className='' />
          </button>
          <button className=''>
            <img src={insta} alt='' className='' />
          </button>
        </div>
      </div>
      <div className='mt-2'>
        <h1 className='text-[14px] font-semibold text-darkBlue'>Properties</h1>
        <ul className='text-xs text-gray-400 mt-4 space-y-2'>
          <button className='block hover:text-green-500 font-medium'>Houses</button>
          <button className='block hover:text-green-500 font-medium'>Apartments</button>
          <button className='block hover:text-green-500 font-medium'>Villas</button>
        </ul>
      </div>
      <div className='mt-2'>
        <h1 className='text-[14px] font-semibold text-darkBlue'>Blog</h1>
        <ul className='text-xs text-gray-400 mt-4 space-y-2'>
          <button className='block hover:text-green-500 font-medium'>Things we need to check</button>
          <button className='block hover:text-green-500 font-medium'>7 Ways to distinguish quality</button>
          <button className='block hover:text-green-500 font-medium'>12 Things To Know</button>
        </ul>
      </div>
      <div className='mt-2'>
        <h1 className='text-[14px] font-semibold text-darkBlue'>Contact</h1>
        <ul className='text-xs text-gray-400 mt-4 space-y-2'>
          <button className='block hover:text-green-500 font-medium'>
            2464 Royal Ln. Mesa, New Jersey 45463
          </button>
          <button className='block hover:text-green-500 font-medium'>(671) 555-0110</button>
          <button className='block hover:text-green-500 font-medium'>info@hounter.com</button>
        </ul>
      </div>
    </div>
  )
}
