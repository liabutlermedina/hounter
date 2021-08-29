import React from 'react'
import dianne from '../img/dianne-sm.png'
import cameron from '../img/cameron.png'
import darlene from '../img/darlene.png'
import henry from '../img/henry.png'
import watch from '../img/watch.png'
import things from '../img/things.jpg'
import qualitySm from '../img/qualitySm.jpg'
import checkSm from '../img/checkSm.jpg'
import bestSm from '../img/bestSm.jpg'
import check from '../img/check.jpg'
import quality from '../img/quality.jpg'
import best from '../img/best.jpg'

export default () => {
  return (
    <div className='mt-4 font-Lexend block lg:hidden mx-4'>
      <h1 className='text-center text-darkBlue font-Lexend text-xl font-semibold mb-2 mr-5'>
        Find out more
      </h1>
      <div className='mt-4'>
        <img src={things} alt='' className='mb-4' />
        <div className='flex justify-between items-center'>
          <button className='text-sm font-medium text-darkBlue hover:text-green-500 block text-left'>
            12 Things To Know <br /> Before Buying A House
          </button>
          <div className=''>
            <p className='text-xs mb-0 text-gray-500'>Cameron Williamson</p>
            <p className='text-xs mb-0 text-gray-500'>25 Apr 2021</p>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <div className='h-[164px] relative'>
          <img src={checkSm} alt='' className='mb-4 object-cover absolute h-full w-full' />
        </div>
        <div className='flex justify-between items-center mt-4'>
          <button className='text-sm font-medium text-darkBlue hover:text-green-500 block text-left'>
            Things We Need To Check <br /> When Buying A House
          </button>
          <div className=''>
            <p className='text-xs mb-0 text-gray-500'>Dianne Russell</p>
            <p className='text-xs mb-0 text-gray-500'>25 May 2021</p>
          </div>
        </div>
      </div>
      <div className='mt-4'>
      <div className='h-[164px] relative'>
          <img src={qualitySm} alt='' className='mb-4 object-cover absolute h-full w-full' />
        </div>
        <div className='flex justify-between items-center mt-4'>
          <button className='text-sm font-medium text-darkBlue hover:text-green-500 block text-left'>
            How To Assess <br /> The Quality Of A House
          </button>
          <div className=''>
            <p className='text-xs mb-0 text-gray-500'>Courtney Henry</p>
            <p className='text-xs mb-0 text-gray-500'>25 Feb 2021</p>
          </div>
        </div>
      </div>
    </div>
  )
}
