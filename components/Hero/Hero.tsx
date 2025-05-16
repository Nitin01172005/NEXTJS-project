import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='relative bg-blue-950 w-full h-screen flex justify-center flex-col'>
      <div className='w-[80%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-2 '> 

        <div>
          <p className='text-white font-bold text-sm sm:text-base md:text-xl '>
          The Top Software Development Company
          </p>

         <h1 className='text-white font-bold text-4xl md:text-5xl lg:text-7xl leading-[2.5rem] md:leading-[4rem]'>Providing software solutions for your any 
         <span className='text-yellow-300'> business</span> </h1> 

         <p className='text-white text-md my-5'>Empowering businesses through innovative software solutions. We specialize in custom development, cloud integration, and digital transformation—driving efficiency, scalability, and success through cutting-edge technology and expert engineering.</p>

         <a className='bg-white px-6 relative inline-flex items-center justify-start overflow-hidden transition-all hover:bg-white group py-3 font-bold rounded'>
          <span className='w-48 h-48 rounded rotate-[40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0'></span>

          <span className='relative w-full text-left font-bold text-black transition-colors duration-300 ease-in-out group-hover:text-white cursor-pointer'>Discover More</span>
          </a> 
        </div>
    {/* image */}
        <div className='mx-auto hidden xl:block'>
        <Image src="/hero.png" alt="hero" width={900} height={900} />
      
        </div>
      </div>
    </div>
  )
}

export default Hero
