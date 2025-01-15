import React from 'react'
import ArticlePrev from './ArticlePrev'
import ArticleSmall from './ArticleSmall'

const Main = () => {
  return (
    <section> 
      <div className='flex flex-row mt-14'>
        <div className='flex-1'>
          <ArticlePrev/>
        </div>
        <div className='flex-1'>
          <ArticleSmall/>
        </div>
      </div>
    </section>
  )
}

export default Main
