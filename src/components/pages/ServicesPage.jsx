import React from 'react'
import styles from '../../styles'
import MainInfo from '../ServicesPageComponents/Maininfo'
import VideoInfo from '../ServicesPageComponents/VideoInfo'
import Info1 from '../ServicesPageComponents/Info1'
import Info2 from '../ServicesPageComponents/Info2'
import Info3 from '../ServicesPageComponents/Info3'
import Customers from '../ServicesPageComponents/Customers'

const ServicesPage = () => {
  return (
    <div id='services'>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <MainInfo/>
          <VideoInfo/>
          <Info1/>
          <Info2/>
          <Info3/>
        </div>
      </div>

      <div className='bg-lightGrey w-full overflow-hidden py-3 pb-10'>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Customers />
            </div>
          </div>
      </div>


    </div>
  )
}

export default ServicesPage
