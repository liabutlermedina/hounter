import React from 'react'
import dianne from '../img/dianne-sm.png'
import cameron from '../img/cameron.png'
import darlene from '../img/darlene.png'
import henry from '../img/henry.png'
import watch from '../img/watch.png'
import things from '../img/things.jpg'
import check from '../img/check.jpg'
import quality from '../img/quality.jpg'
import best from '../img/best.jpg'

export default () => {
  return (
    <div className='mt-20 font-Lexend hidden lg:block'>
      <div className='h-[1px] w-8 mb-[15px] mx-auto bg-yellow-600'></div>
      <p className='text-center text-yellow-600 font-medium text-xs mb-2'>
        Tips and trick from our partnership
      </p>
      <h1 className='text-center text-darkBlue font-Lexend text-3xl font-semibold mb-2 mr-5'>
        Find out more about <br /> selling and buying homes
      </h1>
      <div className='flex justify-between mt-4'>
        <div className='w-1/2 space-y-7'>
          <div className='flex gap-4 mr-4'>
            <div className=''>
              <img src={check} alt='' className='' />
            </div>
            <div className='space-y-3 mt-2'>
              <div className='inline-flex gap-2 items-center'>
                <img src={dianne} alt='' className='' />
                <p className='text-xs mb-0 text-gray-500'>Dianne Russell</p>
              </div>
              <button className='text-[14px] font-medium text-darkBlue hover:text-green-500 block text-left'>
                The things we need to check when <br /> we want to buy a house
              </button>
              <div className='inline-flex gap-2 items-center'>
                <img src={watch} alt='' className='w-5 h-5' />
                <p className='text-xs mb-0 text-gray-500'>
                  4 min read | 25 Apr 2021
                </p>
              </div>
            </div>
          </div>
          <div className='flex gap-4 mr-4'>
            <div className=''>
              <img src={quality} alt='' className='' />
            </div>
            <div className='space-y-3 mt-2'>
              <div className='inline-flex gap-2 items-center'>
                <img src={henry} alt='' className='' />
                <p className='text-xs mb-0 text-gray-500'>Courtney Henry</p>
              </div>
              <button className='text-[14px] font-medium text-darkBlue hover:text-green-500 block text-left'>
                7 Ways to distinguish the quality <br /> of a house
              </button>
              <div className='inline-flex gap-2 items-center'>
                <img src={watch} alt='' className='w-5 h-5' />
                <p className='text-xs mb-0 text-gray-500'>
                  6 min read | 24 Apr 2021
                </p>
              </div>
            </div>
          </div>
          <div className='flex gap-4 mr-4'>
            <div className='flex-none'>
              <img src={best} alt='' className='' />
            </div>
            <div className='space-y-3 mt-2'>
              <div className='inline-flex gap-2 items-center'>
                <img src={darlene} alt='' className='' />
                <p className='text-xs mb-0 text-gray-500'>Darlene Robertson</p>
              </div>
              <button className='text-[14px] font-medium text-darkBlue hover:text-green-500 block text-left'>
                How to make the best out of your future house hunt
              </button>
              <div className='inline-flex gap-2 items-center'>
                <img src={watch} alt='' className='w-5 h-5' />
                <p className='text-xs mb-0 text-gray-500'>
                  2 min read | 24 Apr 2021
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-1/2'>
          <img src={things} alt='' className='' />
          <div className='inline-flex mt-3 gap-2 items-center'>
            <img src={cameron} alt='' className='' />
            <p className='text-xs mb-0 text-gray-500'>Cameron Williamson</p>
          </div>
          <button className='text-lg font-medium text-darkBlue hover:text-green-500 block text-left'>
            12 Things To Know Before Buying A House
          </button>
          <p className='text-sm text-gray-500 mb-2'>
            Want to buy a house but are unsure about what you should know? Here
            I will try to explain what to look for when we want to buy a house
          </p>
          <div className='inline-flex gap-2 items-center'>
            <img src={watch} alt='' className='w-5 h-5' />
            <p className='text-xs mb-0 text-gray-500'>
              8 min read | 25 Apr 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
