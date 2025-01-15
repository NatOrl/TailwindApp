import React from 'react';
import Slider from "react-slick";
import { customer } from '../../constants'
import "slick-carousel/slick/slick.css";
import { blackArrowNext, blackArrowPrev } from '../../assets';

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <img src={blackArrowNext} alt="Next" style={{ width: "8px", height: "13px" }} />
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ display: "flex", alignItems: "center", justifyContent: "center"}}
    >
      <img src={blackArrowPrev} alt="Next" style={{ width: "8px", height: "13px" }} />
    </div>
  );
};

const Customers = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 480, // xs
        settings: {
          slidesToShow: 1,
  
        },
      },
      {
        breakpoint: 620, // ss
        settings: {
          slidesToShow: 1,
 
        },
      },
      {
        breakpoint: 768, // sm
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1060, // md
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200, // lg
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1700, // xl
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };


  return (
    <section >
      <div> 
        <div className="max-w-[450px] mx-auto flex flex-col items-center">
          <h1 className='font-semibold ss:text-[35px] text-[28px] text-black leading-[40px] text-center sm:pt-10 py-5'>
          Trusted by Thousands of Happy Customer.
          </h1>  
        </div>
        <div className="max-w-[560px] mx-auto flex flex-col items-center mt-4">
          <p className='ss:text-[16px] text-[12px] text-textgrey leading-[30px] text-center'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .
          </p>  
        </div>
      </div>

      <Slider {...settings}>
        {customer.map(({header, content, icon}) => (
          <div className='bg-lightGrey rounded-[20px] p-10 dropshadow'>

            <div>
              <div className='m-5 flex-initial'>
                <img src={icon}/>
              </div>
              <h1 className='font-semibold text-black text-[20px] ml-1'>
                {header}
              </h1>
            </div>

            <div>
              <p className="font-medium text-black text-[16px] leading-[24px] ml-1 my-2 cursor-pointer">
                {content}
              </p>
            </div>

          </div>
        ))}
        </Slider>
      
    </section >
  )
}

export default Customers
