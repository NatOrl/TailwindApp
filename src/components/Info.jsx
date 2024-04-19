import React from 'react'
import { office, orangeDots } from '../assets'
import styles from '../styles'

const Info = () => {
  return (
    <section id='home' className={`relative flex flex-col py-10}`}>
      <div className="max-w-[800px] mx-auto flex flex-col items-center py-10">
        <h1 className='font-semibold ss:text-[25px] text-[20px] text-black sm:leading-[50px] leading-[40px] text-center sm:py-10 py-5'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </h1>  
      </div>

      <div className="max-w-[800px] pb-10">
        <h1 className='font-bold ss:text-[30px] text-[25px] text-black leading-[60px] sm:pt-10 pt-5'>
          Lorem ipsum.
        </h1>
        <p className='max-w-[600px] ss:text-[20px] text-[16px] text-black leading-[40px] mb-5'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>
      </div>

      <div className="flex flex-1 max-w-[1000px] h-auto relative z-0 ">
        <img src={office} alt='office' className='w-full rounded-[5px]' style={{zIndex: 5}} />
        <img src={orangeDots} alt='orangeDots' className='object-contain sm:w-auto w-[20%] sm:block hidden' style={{ position: 'absolute', top: -60, right: -60, zIndex: -1 }} />
      </div>

    </section>
  )
}

export default Info
