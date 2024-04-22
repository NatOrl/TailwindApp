import React from 'react';
import { whywork } from '../../constants';

const WorkWithUs = () => {
  return (
    <section id='home' className={`relative flex flex-col py-0}`}>

      <div className='flex flex-col md:items-start items-center text-[25px] font-semibold md:mt-20 mt-10' style={{color: '#222222', }}>
          <h1>
            Why work with us
          </h1>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center mt-10">
        {whywork.map(({ id, title, content, header }, index) => (
          <div key={id} className={`bg-lightGrey rounded-[20px] md:mb-0 mb-10 p-10 whywork  ${index !== whywork.length - 1 ? 'md:mr-10' : ''}`}>
            <div>
              <h1 className='font-semibold text-black text-[20px] '>
                {title}
              </h1>
            </div>  

            <div>
              <h1 className='font-semibold text-black text-[20px]'>
                {header}
              </h1>
            </div>

            <div>
              <p className="md:w-full max-w-[500px] font-medium text-textgrey text-[14px] leading-[24px] my-2 cursor-pointer">
                {content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkWithUs;