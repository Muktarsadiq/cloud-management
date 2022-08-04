import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
      <div className='max-w-[900px] mx-auto'>
        <div className='text-center'>
          <h2 className='text-5xl font-bold'>Trusted by developers across the world</h2>
          <p className='text-2xl py-5 text-gray-700'>R3flex is a powerful self-service engine to provide enterprise agility, control, and efficiency. Quickly enable on-prem private clouds, centralize public cloud access, and orchestrate change with cost analytics, governance policy, and automation.</p>
        </div>
        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
          <div className='border py-8 rounded-xl shadow-xl'>
            <p className='text-4xl font-bold text-red-400'>100%</p>
            <p className='text-gray-400 mt-2 p-2'>built-in codeless integrations for value in under 1 hour</p>
            <button className='p-1 m-3'>Read more</button>
          </div>
          <div className='border py-8 rounded-xl shadow-xl'>
            <p  className='text-4xl font-bold text-red-400'>24/7</p>
            <p className='text-gray-400 mt-2 p-2'>Freedom to run any app on any private or public cloud</p>
            <button className='p-1 m-3'>Read more</button>
          </div>
          <div className='border py-8 rounded-xl shadow-xl'>
            <p className='text-4xl font-bold text-red-400'>100K</p>
            <p className='text-gray-400 mt-2 p-2'>Over a 100k transactions taking place to secure your apps</p>
            <button className='p-1 m-3'>Read more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About