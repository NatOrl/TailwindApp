import React from 'react'

const Newsletter = () => {
  return (

    <section className='lg:mt-0 mt-10'>
      <div className="max-w-[800px] pb-10">
        <h1 className='font-bold ss:text-[30px] text-[25px] text-black leading-[60px] sm:pt-10 pt-5'>
          Lorem ipsum.
        </h1>
        <p className='max-w-[700px] ss:text-[20px] text-[16px] text-black leading-[40px] mt-4 mb-8'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </p>
      </div>


      <div className='py-8 text-white bg-[#1b1b1b] px-4 rounded-[15px] mb-20'>
      <div className='max-w-[1170px] mx-auto grid lg:grid-cols-3'>

        <div className='lg:col-span-2 my-4'>
          <h1 className='ss:text-[30px] text-[26px] py-2 font-medium'>
            Stay in the loop
          </h1>
          <p className='max-w-[600px] ss:text-[18px] text-[16px] font-poppins'>
            Subscribe to receive the latest news and updates about TDA. We promise not to spam you! 
          </p>
        </div>

        <div className='my-4 flex relative max-w-[400px] '>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='h-[48px] pl-4 flex w-full rounded-[8px] text-black'
              type='email'
              placeholder='Enter email address'
            > 
            </input>
            <button className=' bg-secondary  text-white items-center justify-center rounded-[8px] font-medium h-[37px] w-[120px] ml-4 my-6 px-6 py-3 lg:block hidden' style={{ position: 'absolute', top: 15, right: 5}} >
              <div className="flex items-center justify-center w-full h-full">
                Continue
              </div>
            </button>
            <button className=' bg-secondary text-white items-center justify-center rounded-[8px] font-medium h-[37px] w-[120px] ml-4 my-6 px-6 py-3 lg:hidden block' style={{ position: 'absolute', top: -18, right: 5}}>
              <div className="flex items-center justify-center w-full h-full">
                Continue
              </div>
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Newsletter


