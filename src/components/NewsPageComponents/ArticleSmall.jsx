import React from 'react'
import { smallArt } from '../../constants'

const ArticleSmall = () => {
  return (
    <div>
      <div className="flex flex-col justify-center cursor-pointer">
          {smallArt.map(({ id, icon, content }) => (
            <div key={id} className="flex flex-row items-center my-6 ml-6 ">
              <div className="flex w-[40%]">
                <img src={icon} alt="" className="object-contain" />
              </div>
              <div>
                <p className="font-medium text-black text-[24px] leading-[24px] ml-6 text-wrap">
                  {content}
                </p>
              </div>
            </div>
          ))}
        </div>
      
    </div>
  )
}

export default ArticleSmall
