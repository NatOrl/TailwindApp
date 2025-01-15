import React from 'react'
import styles from '../../styles'


const SearchBar = () => {
  return (
    <section>
      <section>
      <div className={`flex-1 ${styles.flexCenter} flex-col mt-20 `}>
        <div className='flex flex-row lg:mt-0 mt-10'>
          <h1 className='font-poppins font-poppins flex-1 ss:text-[12px] text-[10px] cursor-pointer' style={{ color: '#848484' }}>
            Home
          </h1> 
          <span className='text-normal ss:text-[12px] text-[10px] px-2' style={{ color: '#848484' }}>></span>
          <h1 className='font-poppins font-poppins flex-1  ss:text-[12px] text-[10px] text-secondary text-nowrap cursor-pointer'>
            News
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
        <div className="max-w-[600px] mx-auto flex flex-col items-center mt-10">
          <input 
            type="text" 
            placeholder="Search..." 
            className="border border-gray-400 rounded-lg px-4 py-2 w-full ss:max-w-[400px] text-[14px]"
          />
        </div>

      </div>
        
    </section>

    </section>
  )
}

export default SearchBar
