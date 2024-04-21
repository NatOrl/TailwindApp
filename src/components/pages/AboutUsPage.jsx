import React from 'react'
import styles from '../../styles'
import Info from '../AboutUsPageComponents/Info'

const AboutUsPage = () => {
  return (
    <div>

      <div className='bg-lightOrange w-full overflow-hidden mb-10'>
        <div className={` ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Info/>
          </div>
        </div>
      </div>

    </div>
  )
}



export default AboutUsPage
