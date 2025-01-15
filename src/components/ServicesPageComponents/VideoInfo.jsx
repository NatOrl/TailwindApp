import React from 'react'
import { playicon, servicesvideo } from '../../assets'
import { servicesvideolist } from '../../constants'

const VideoInfo = () => {
  return (
    <section className={`relative flex md:flex-row flex-col items-center justify-center  mt-14`}>
      
      <div className={`flex relative md:w-[50%] w-full md:justify-end justify-center md:ml-10 ml-0`}>
        <img src={servicesvideo} alt='servicesvideo' className='flex relative flex-initial'/>
        <img src={playicon} alt="playicon" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{ width: '56px', height: '56px' }} />
      </div>

      <div className={`flex flex-col w-[50%] ml-20`}>
        <div className='flex flex-col max-w-[515px]'>
          <div className="max-w-[470px] flex flex-col">
            <h1 className='font-poppins font-bold ss:text-[30px] text-[25px] text-black leading-[50px]'>
            Lorem Ipsum is simply dummy text.
            </h1>  
          </div>

          <div className="max-w-[500px] flex flex-col">
            <p className='font-poppins ss:text-[14px] text-[10px] text-textgrey leading-[30px] my-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
            </p>
          </div>

          <div className="flex flex-col justify-center">
          {servicesvideolist.map(({ id, icon, content }, index) => (
            <div key={id} className={`flex flex-row items-center justify-start py-2`}>
              <div className="w-[20px] h-[20px] rounded-full  flex items-center justify-center cursor-pointer mr-4">
                <img src={icon} alt="" className="object-contain"/>
              </div>
              <div className='flex flex-col justify-center'>
                <p className="font-regular text-[14px] leading-[24px] whitespace-nowrap cursor-pointer" style={{ color: '#4F5665' }}>
                  {content}
                </p>
              </div>
              
            </div>
          ))}
        </div>

        </div>
      </div>
    </section>
  )
}

export default VideoInfo
