import React from 'react'
import styles from '../../styles'
import { people, line1, line2, line3, line4 } from '../../assets'

const Marketing = () => {
  return (
    
    <section id='home' className={`relative flex md:flex-row flex-col sm:py-20 py-16}`}>
      {/* Background image */}
      <img src={line3} alt='line3' className=' absolute top-0 right-0 w-[100%] h-[20%]  object-contain z-1 md:h-auto md:w-[60%]' />
      <img src={line2} alt='line2' className='absolute bottom-0 right-0 w-[60%] h-[15%] object-contain z-0 md:h-[70%]' />
      <img  src={line1} alt="line1" className="absolute bottom-0 object-contain w-full z-8"/>
      <img src={line4} alt='line4' className='absolute bottom-0 left-0 w-[40%] h-[12%] object-contain z-0 md:h-[35%]' />
      
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-16 sm:px-16 px-6 z-[5] `}>
      

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='font-poppins font-poppins flex-1 font-bold ss:text-[20px] text-[20px] text-secondary ss:leading-[50px] leading-[75px]'>
            Digital Marketing <br className='sm:block hidden'/> {" "}
          </h1>  
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='font-poppins flex-1 font-bold ss:text-[62px] text-[50px] text-black ss:leading-[80px] leading-[75px]'>
            Work that we <br className='sm:block hidden'/> {" "}
          </h1>  
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='font-poppins flex-1 font-bold ss:text-[62px] text-[50px] text-black ss:leading-[80px] leading-[75px]'>
            produce for our <br className='sm:block hidden'/> {" "}
          </h1>  
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='font-poppins flex-1 font-bold ss:text-[62px] text-[50px] text-black ss:leading-[80px] leading-[75px]'>
            clients <br className='sm:block hidden'/> {" "}
          </h1>  
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-8`}> 
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ab, molestiae a dicta exercitationem sed?
        </p>

        <button type='button' className={`py-4 px-10 gradient-orangeBtn font-medium text-[18px] text-white mt-10 outline-none rounded-[40px]`}>
          Get mode details
        </button>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={people} alt='people' className='w-[100%] h-[100%] relative z-[5]'/>
      </div>

    </section>
    

    
  )
}

export default Marketing
