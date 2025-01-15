import React from 'react'
import { servicesArtPrev, servicesArtPrev2 } from '../../assets'

const ArticlePrev = () => {
  return (
    <section className={`relative flex flex-col items-center justify-center mr-5`}>

      <div className={`flex flex-col`}>
        
        <img src={servicesArtPrev} className='flex relative flex-initial mb-6'/>
        
        <div className='flex justify-center flex-col'>
        <button type='button' style={{ backgroundColor: '#2351F5' }} className={`py-4 px-10 font-medium text-[16px] text-white outline-none max-w-[180px]`}>
            Read more
          </button>
          <div className="flex flex-col mt-10">
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
        </div>
      </div>


      <div className={`flex flex-col pt-10 border-t border-gray-300`}>
        
        <img src={servicesArtPrev2} className='flex relative flex-initial mb-6'/>
        
        <div className='flex justify-center flex-col'>
        <button type='button' style={{ backgroundColor: '#2351F5' }} className={`py-4 px-10 font-medium text-[16px] text-white outline-none max-w-[180px]`}>
            Read more
          </button>
          <div className=" flex flex-col mt-10">
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

          
        </div>
      </div>
    </section>
  )
}

export default ArticlePrev
