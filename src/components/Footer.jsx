import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col lg:flex-row'>

      <div className='flex flex-row'>
        <div className='lg:max-w-[400px] w-[50%]'> 
          <h1 className='font-bold ss:text-[25px] text-[20px] text-white leading-[60px] sm:pt-10 pt-5'>
            LOGO
          </h1>
          <p className='max-w-[700px] ss:text-[20px] text-[16px] text-white leading-[40px] mt-4 mb-8'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </p>
          <p className='max-w-[700px] ss:text-[20px] text-[16px] text-white leading-[40px] mt-4 mb-8'>
            @Company.com 
          </p>
        </div>

        <div className='w-[200px] flex flex-col items-center ss:text-[20px] text-[16px] lg:mx-10 mx-auto text-white'>
          <div className='font-medium w-full pt-10 pl-10'>
            <ul>
              <li >
                <a href='#'>About us</a>
              </li>
            </ul>
          </div>
          <div className='w-full pt-10 leading-[40px] pl-10'>
            <ul>
              <li className='list-none flex flex-col'>
                <a href='#'>Company</a>
                <a href='#'>Portfolio</a>
                <a href='#'>Careers</a>
                <a href='#'>Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
        

        <div className='flex sm:flex-row flex-col'>
          <div className='lg:max-w-[400px] w-full flex flex-col items-center ss:text-[20px] text-[16px] lg:mx-10 mx-0 text-white'>
            <div className='font-medium w-full pt-10 lg:pl-10 pl-0'>
              <ul>
                <a href='#'>Contact us</a>
              </ul>
            </div>
            <div className='w-full lg:pt-10 pt-5 leading-[30px] lg:pl-10 pl-0'>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </p>
              <p className='mt-10 '>
                +9000 0000 000
              </p>
            </div>
          </div>
        
          <div className="flex items-end mb-10 justify-center mx-auto">
                <FacebookShareButton
                url={"https://www.youtube.com/"}
                  quote={"Frontend Developer"}
                  hashtag="#react" 
                >
                  <FacebookIcon className="mx-3 lg:my-0 my-2" size={36} />
                </FacebookShareButton>
                <TwitterShareButton
                url={"https://www.youtube.com/"}
                  quote={"Frontend Developer"}
                  hashtag="#react"
                >
                  <TwitterIcon className="mx-3 lg:my-0 my-2" size={36} />
                </TwitterShareButton>
                <RedditShareButton
                  url={"https://www.youtube.com/"}
                  quote={"Frontend Developer"}
                  hashtag="#react"
                >
                  <RedditIcon className="mx-3 lg:my-0 my-2" size={36} />
                </RedditShareButton>
                <LinkedinShareButton
                  url={"https://www.youtube.com/"}
                  quote={"Frontend Developer"}
                  hashtag="#react"
                >
                  <LinkedinIcon className="mx-3 lg:my-0 my-2" size={36} />
                </LinkedinShareButton>
          </div>
          </div>       
        </div>

      <div className='border-t-[#D2D2D2] border-t text-white flex items-center justify-center'>
        <p className='mt-8'> 
          Copyright©2024 Natalia O. | All Rights Reserved
        </p> 
      </div>
    </div>
  )
}

export default Footer
