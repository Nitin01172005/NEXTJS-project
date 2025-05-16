"use client";


import { NavLinks } from '@/constants/constant';
import React, { useEffect, useState } from 'react';
import { GrTechnology } from "react-icons/gr";
import { HiBars3BottomRight } from "react-icons/hi2";
import Link from 'next/link'; // ✅ Import Link from next/link

type props = {
  openNav: () => void;
}

const Navbar = ({openNav}:props) => {

  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler =() => {
      if(window.scrollY > 90 ) {
        setNavBg(true);
      }
      if(window.scrollY < 90 ) {
        setNavBg(false);
      }
    }
    
    window.addEventListener("scroll", handler);
    return() => window.removeEventListener("scroll", handler);

  },[])


  return (
    <div className={`transition-all ${navBg ? "bg-blue-900 shadow-md": "fixed"} duration-300 h-[12vh] z-[100] fixed w-full`}>
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
        
        {/* Left section: Logo + Brand */}
        <div className='flex items-center space-x-2'>
          <div className='w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center'>
            <GrTechnology className='w-6 h-6 text-white' />
          </div>
          <div className='text-xl hidden sm:block md:text-2xl text-white font-bold'>
            DevTech
          </div>
        </div>

        {/* Right section: Navigation Links */}
        <div className='hidden lg:flex items-center space-x-6 text-white'>
          {NavLinks.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className="text-white text-lg hover:text-pink-400 font-semibold transition-all duration-250"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className='flex items-center space-x-4 '>
          <a href="#" className='px-5 py-2.5 relative rounded group font-medium text-white inline-block '>
          <button className="relative inline-flex items-center justify-center px-6 py-2 font-semibold text-white group cursor-pointer">
              {/* Layer 1: Blurred background */}
              <span className="absolute left-0 top-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-500 to-blue-500"></span>

              {/* Layer 2: Active state */}
              <span className="absolute inset-0 w-full h-full mt-0.5 ml-0.5 bg-gradient-to-br from-purple-600 to-blue-500 filter rounded opacity-50 group-active:opacity-0"></span>

              {/* Layer 3: Hover effect */}
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br from-purple-600 to-blue-500 filter group-active:opacity-0 group-hover:blur-sm"></span>

              {/* Layer 4: Base background */}
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded bg-gradient-to-r from-blue-500 to-purple-600"></span>

              {/* Layer 5: Button text */}
              <span className="relative z-10">Create Account</span>
            </button>

          </a>
          {/* theme dark mode toggle button */}

          {/* burger menu */}

          <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg-hidden' />

        </div>

      </div>
    </div>
  );
};

export default Navbar;
