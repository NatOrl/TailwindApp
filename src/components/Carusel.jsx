import React from 'react'
import { carousel } from '../constants'
import { arrow } from '../assets'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { blackArrowNext, blackArrowPrev } from '../assets';

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

const Carusel = () => {
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
    <div className='w-full m-auto'>
      <div className='mt-6'>
        <div className="mx-auto flex flex-col mt-10">
          <h1 className='font-poppins font-bold ss:text-[30px] text-[25px] text-black leading-[40px] sm:pt-10 py-5'>
          Lorem Ipsum
          </h1>  
        </div>
        <div className="max-w-[600px] flex flex-col mb-20">
          <p className='font-poppins ss:text-[20px] text-[16px] text-textgrey leading-[40px]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>  
        </div>

      <Slider {...settings}>
        {carousel.map(({id, header, content}) => (
          <div className='bg-white rounded-[20px] p-10 dropshadow'>

            <div>
              <h1 className='font-semibold text-black text-[20px] ml-1'>
                {header}
              </h1>
            </div>

            <div>
              <p className="font-medium text-black text-[16px] leading-[24px] ml-1 my-2 cursor-pointer">
                {content}
              </p>
            </div>

            <div className='flex justify-end'>
              <div className='flex flex-row items-center mt-10 cursor-pointer'>
                <p className='font-medium text-secondary text-[14px] mr-2'>
                  Read more 
                </p>
                <img src={arrow} className='w-[14px] h-[14px] '/>
              </div>
            </div>

          </div>
        ))}
        </Slider>
      </div>
    </div>
  )
}

export default Carusel
