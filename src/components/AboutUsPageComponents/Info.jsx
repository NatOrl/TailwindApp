import React from 'react'
import styles from '../../styles'
import { twodudes, whitearrow } from '../../assets'

const Info = () => {
  return (
    <section id='home' className={`relative flex lg:flex-row flex-col  py-0}`}>

      
      <div className={`flex-1 ${styles.flexStart} flex-col xl:pl-16 sm:pl-16 pl-6 z-[5] `}>
        <div className='flex flex-row mb-5 lg:mt-0 mt-10'>
          <h1 className='font-poppins font-poppins flex-1  ss:text-[12px] text-[10px] cursor-pointer' style={{ color: '#848484' }}>
          Home
          </h1> 
          <span className='text-normal ss:text-[12px] text-[10px] px-2' style={{ color: '#848484' }}>></span>
          <h1 className='font-poppins font-poppins flex-1  ss:text-[12px] text-[10px] text-secondary text-nowrap cursor-pointer'>
            About us
          </h1>  
        </div>


          <div className='flex flex-row justify-between items-center md:w-full max-w-[70%]'>
            <h1 className='font-poppins flex-1 font-bold ss:text-[30px] text-[20px] text-black ss:leading-[50px] leading-[30px]'>
            Lorem ipsum is simply. <br className='lg:block hidden'/> {" "}
            dummy text of the printing <br className='lg:block hidden'/> {" "}
            and.
            </h1>  
          </div>

        <p className={`${styles.paragraph} lg:max-w-[450px] w-[80%] mt-8 text-textgrey ss:text-[15px] text-[10px] `}> 
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>

        <button type='button' className={`flex items-center justify-center py-4 px-6 gradient-orangeBtn font-medium ss:text-[16px] text-[10px] text-white mt-10 outline-none rounded-[40px]`}>
          <p>
            Get in touch
          </p>
          <img src={whitearrow} alt='whitearrow' className='ml-3 flex '/>
        </button>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} relative`}>
        <img src={twodudes} alt='twodudes' className='lg:w-[100%] w-[50%] lg:h-[100%] h-[50%]  relative z-[5] lg:rounded-[0] rounded-[50%] lg:mb-0 mb-10'/>
        {/* <div style={{ position: 'absolute', top: 530, right: 582, zIndex: 20}}>
          elo
        </div> */}
      </div>

    </section>

  )
}

export default Info
