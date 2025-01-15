import React from 'react'
import { servicesinfo1 } from '../../assets'

const Info1 = () => {
  return (
    <section className={`relative flex md:flex-row flex-col items-center justify-center  mt-14`}>
      

      <div className={`flex flex-col w-[50%] ml-10`}>
        <div className='flex justify-center flex-col'>
          <div className="max-w-[470px] flex flex-col mt-10">
            <h1 className='font-poppins font-medium ss:text-[30px] text-[25px] text-black leading-[40px]'>
            Lorem Ipsum is simply dummy text dummy text 
            </h1>  
          </div>

          <div className="max-w-[600px] flex flex-col mb-14">
            <p className='font-poppins ss:text-[17px] text-[12px] text-textgrey leading-[30px] mt-8'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            </p>
            <p className='font-poppins ss:text-[17px] text-[12px] text-textgrey leading-[30px] mt-8'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </p>  
          </div>

          <button type='button' className={`py-4 px-10 bg-secondary font-medium text-[16px] text-white outline-none max-w-[180px]`}>
            Read more
          </button>
        </div>
      </div>
      <div className={`flex relative md:w-[50%] w-full md:justify-start justify-center ml-20`}>
        <img src={servicesinfo1} alt='servicesinfo1' className='flex relative flex-initial'/>
      </div>
    </section>
  )
}

export default Info1
