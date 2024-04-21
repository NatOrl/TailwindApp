import React from 'react'
import styles from '../../styles'

const AboutUsPage = () => {
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <section id="about" className={`relative flex md:flex-row flex-col sm:py-20 py-16}`}>
          
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

          {/* <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
            <img src={people} alt='people' className='w-[100%] h-[100%] relative z-[5]'/>
          </div> */}

        
        </section>
      </div>
    </div>

    
  )
}

export default AboutUsPage
