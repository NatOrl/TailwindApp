import React from 'react'
import styles from '../../styles'
import SearchBar from '../NewsPageComponents/SearchBar'
import Main from '../NewsPageComponents/Main'



const NewsPage = () => {
  return (
    <div id="news">
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <SearchBar/>
          <Main/>
        </div>
      </div>
    </div>
  )
}

export default NewsPage
