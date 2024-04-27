import React from 'react'
import { servicesmaininfo } from '../../constants' 
import styles from '../../styles'

const Maininfo = () => {
  return (
    <section>
      <div className={`flex-1 ${styles.flexCenter} flex-col mt-10 `}>
        <div className='flex flex-row lg:mt-0 mt-10'>
          <h1 className='font-poppins font-poppins flex-1 ss:text-[12px] text-[10px] cursor-pointer' style={{ color: '#848484' }}>
            Home
          </h1> 
          <span className='text-normal ss:text-[12px] text-[10px] px-2' style={{ color: '#848484' }}>></span>
          <h1 className='font-poppins font-poppins flex-1  ss:text-[12px] text-[10px] text-secondary text-nowrap cursor-pointer'>
            About us
          </h1>  
        </div>

        <div className="max-w-[1000px] mx-auto flex flex-col items-center">
          <h1 className='font-semibold ss:text-[33px] text-[28px] text-black leading-[40px] text-center sm:pt-10 py-5'>
          Lorem Ipsum is simply dummy text of the printing and.
          </h1>  
        </div>
        <div className="max-w-[600px] mx-auto flex flex-col items-center">
          <p className='ss:text-[16px] text-[12px] text-textgrey leading-[40px] text-center'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>  
        </div>

        <div className="flex flex-row flex-wrap mt-8 sm:justify-start justify-center rounded-[10px] bg-white rectangleBlur">
          {servicesmaininfo.map(({ id, icon, title, value }, index) => (
            <div key={id} className={`w-[380px] h-[120px] flex flex-row items-center justify-center my-[40px] ${index !== servicesmaininfo.length - 1 ? 'border-r border-solid' : 'border-none'}`}  style={{ borderColor: '#EEEFF2' }}>
              <div className="w-[55px] h-[55px] rounded-full bg-lightOrange flex items-center justify-center cursor-pointer mr-8">
                <img src={icon} alt="" className="object-contain"/>
              </div>
              <div className='flex flex-col justify-center'>
                <p className="font-bold text-[20px] leading-[24px] whitespace-nowrap mb-1 cursor-pointer" style={{ color: '#0B132A' }}>
                  {value}
                </p>
                <p className="font-regular text-[20px] leading-[24px] whitespace-nowrap cursor-pointer" style={{ color: '#4F5665' }}>
                  {title}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
        
    </section>
  )
}

export default Maininfo
