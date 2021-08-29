import React from 'react'
import logo from '../img/logo.png'
import fb from '../img/fb.png'
import twitter from '../img/twitter.png'
import insta from '../img/insta.png'

export default () => {
  return (
    <div className='mx-4 mt-8 mb-4 block lg:hidden text-center pt-4 border-t border-gray-300'>
      <div className='mt-4'>
        <button className='flex gap-2 items-center justify-center w-20 mx-auto'>
          <img src={logo} alt='' className='w-7 h-7' />
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
    </div>
  )
}
