import React from 'react'
import { project1, project2, project3, project4, project5, project6 } from '../assets'

const Projects = () => {
  return (
    <div className='mb-8'>
      <div className="max-w-[800px] mx-auto flex flex-col items-center mt-20">
          <h1 className='font-bold ss:text-[30px] text-[25px] text-black leading-[40px] text-center sm:pt-10 py-5'>
          Our Recent Projects
          </h1>  
        </div>
        <div className="max-w-[600px] mx-auto flex flex-col items-center">
          <p className='ss:text-[20px] text-[16px] text-textgrey leading-[35px] text-center'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        <div className='flex flex-initial justify-center items-center mx-auto md:w-full max-w-[1300px]  mt-10 flex-col'>
          <div className='flex  justify-center items-center'>
            <div className='m-5 flex-initial '>
              <img src={project1}/>
            </div>
            <div className='m-5 flex-initial'>
              <img src={project2}/>
            </div>
            <div className='m-5 flex-initial'>
              <img src={project3}/>
            </div>

          </div>
          <div className='flex  justify-center items-center'>
            <div className='m-5 flex-initial'>
            <img src={project4}/>
            </div>
            <div className='m-5 flex-initial'>
              <img src={project5}/>
            </div>
            <div className='m-5 flex-initial'>
              <img src={project6}/>
            </div>
          </div>
          

        </div>
    </div>
  )
}

export default Projects
