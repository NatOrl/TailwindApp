import React from 'react'
import { partnerships } from '../../constants'

const Partnerships = () => {
  return (
    <section id='home' className={`relative flex flex-col py-0}`}>

      <div className='flex flex-col md:items-start items-center text-[25px] font-semibold md:mt-20 mt-10' style={{color: '#222222', }}>
          <h1>
            Our Partnership and Collabratiors
          </h1>
      </div>
      <div className="flex flex-row flex-wrap items-center">
        {partnerships.map(({ id, icon }, index) => (
          <div key={id} className={`flex flex-col bg-lightGrey rounded-[20px] md:mb-0 mb-10 p-5  whywork ${index !== partnerships.length - 1 ? 'md:mr-10' : ''}`}>
            <div className='flex items-center justify-center'>
              <img src={icon} alt="" className="object-contain " />
            </div>  
          </div>
        ))}
      </div>
    </section>
  )
}

export default Partnerships
