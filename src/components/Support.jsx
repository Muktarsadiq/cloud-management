import React from 'react';

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import {ChipIcon, SupportIcon} from '@heroicons/react/solid';

import supportImg from '../assets/support.jpg'

const Support = () => {
  return (
    <div name='support' className='w-full mt-24'>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="" />
        </div>
        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
                <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
                <p className='py-4 text-3xl text-slate-300'>We at Reflex cloud are tasked with finding the best cloud management for your website and apps. And arecontantly up to date with the new technologies on cloud management in order to provide our clients with smooth platforms for thier apps.</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <PhoneIcon className='w-16 p-4 bg-red-400 text-white rounded-lg mt-[-4rem]' />
                        <h3 className='font-bold text-2xl my-6'>Sales</h3>
                        <p className='text-gray-600 text-xl'>Over the years, our clientel has gone from a few handfull sales to above a 100k sales a month and still counting. With recommendations from other cloud management  platforms from places around the world.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-red-600'>contact us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <SupportIcon className='w-16 p-4 bg-red-400 text-white rounded-lg mt-[-4rem]' />
                        <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                        <p className='text-gray-600 text-xl'>To contact our techincal team for any problems you may be having our to find out how e at r3flex handle your apps and more technical information kindly contact us below and we would get in touch with you.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-red-600'>contact us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <ChipIcon className='w-16 p-4 bg-red-400 text-white rounded-lg mt-[-4rem]' />
                        <h3 className='font-bold text-2xl my-6'>Media Enquiries</h3>
                        <p className='text-gray-600 text-xl'>We have a very strong social media presense so you can conatact us Via all social media  @R3flex-cloud on all social media platforms including github. Also subscribe to our youtube channel for latest info  on our products and services.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-red-600'>contact us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support