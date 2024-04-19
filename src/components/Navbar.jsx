import React from 'react';
import { navLinks } from '../constants';
import { useState } from 'react';
import { close, menu } from "../assets"


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='x-full flex justify-between items-center navbar'>
      <ul className='flex items-center'> {/* Added 'flex items-center' */}
        <li className='text-[25px] font-bold text-white'>LOGO</li> {/* Changed 'ul' to 'li' */}
      </ul>
      
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-normal cursor-pointer text-[16px] 
              ${index === navLinks.length - 1 ? 'mr-0 text-secondary bg-white rounded-[6px] px-10 py-3' : 'mr-12 text-white'}`}  
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Sidebar */}
      <div className='sm:hidden flex justify-end items-center z-[100]'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setToggle(prev => !prev)}
        />
        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 absolute top-20 right-0 left-0 mx-4 my-2  rounded-xl bg-secondary justify-center sidebar`}
        >
          <ul className='list-none flex flex-col items-center'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? 'mb-0' : 'mb-6'
                } text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
