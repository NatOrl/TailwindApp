import React from 'react'
import { services } from '../constants'
import { arrow } from '../assets'

const Services = () => {
  return (
    <div>
        <div className="max-w-[800px] mx-auto flex flex-col items-center pt-10 mt-20">
          <h1 className='font-semibold ss:text-[30px] text-[25px] text-black leading-[40px] text-center sm:pt-10 py-5'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </h1>  
        </div>
        <div className="max-w-[900px] mx-auto flex flex-col items-center">
          <p className='ss:text-[20px] text-[16px] text-textgrey leading-[40px] text-center'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>  
        </div>

        <div className="flex sm:flex-row flex-col flex-wrap mt-8">
          {services.map(({ id, icon, content }) => (
            <div key={id} className="sm:w-auto sm:flex-1 flex flex-col items-center my-4 mx-6 ">
              <div className="w-[65px] h-[65px] rounded-full bg-lightOrange mb-6 flex items-center justify-center cursor-pointer">
                <img src={icon} alt="" className="object-contain" />
              </div>
              <p className="font-medium text-black text-[16px] leading-[24px] text-center whitespace-nowrap my-2 cursor-pointer">
                {content}
              </p>
              <img src={arrow} alt="" className="my-5 cursor-pointer" />
            </div>
          ))}
        </div>
    </div>
  )
}

export default Services
