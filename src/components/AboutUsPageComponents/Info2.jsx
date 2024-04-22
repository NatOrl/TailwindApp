import React from 'react'
import { office2 } from '../../assets'
import styles from '../../styles'

const Info2 = () => {
  return (
    <section className={`relative flex  md:flex-row flex-col sm:pt-20 lg:pt-20 pt-16}`}>
      <div className={`flex-initial flex ${styles.flexCenter}  mt-10 relative`}>
        <img src={office2} alt='office' className=' relative z-[5] flex-initial md:rounded-[0] rounded-[50%] md:w-[100%] w-[40%]'/>
      </div>

      <div className={`flex-1 ${styles.flexCenter} flex-col z-[5] `}>
        <div className='flex justify-center items-center flex-col md:ml-8 ml-0'>
          <div className="max-w-[470px] flex flex-col mt-10">
            <h1 className='font-poppins font-medium ss:text-[30px] text-[25px] text-black leading-[40px] md:text-left text-center'>
            Lorem Ipsum is simply dummy text dummy text 
            </h1>  
          </div>

          <div className="max-w-[600px] flex flex-col mb-14">
            <p className='font-poppins ss:text-[17px] text-[12px] text-textgrey leading-[30px] mt-8 md:text-left text-center'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            </p>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info2
