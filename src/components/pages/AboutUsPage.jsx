import React from 'react'
import styles from '../../styles'
import Info from '../AboutUsPageComponents/Info'
import WorkWithUs from '../AboutUsPageComponents/WorkWithUs'
import Info2 from '../AboutUsPageComponents/Info2'
import OurTeam from '../AboutUsPageComponents/OurTeam'
import Partnerships from '../AboutUsPageComponents/Partnerships'

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

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} mb-20 pb-10`}>
        <div className={`${styles.boxWidth}`}>
          <WorkWithUs/>
        </div>
      </div>

      <div className='bg-lightGrey w-full overflow-hidden mt-3 pb-0 '>
          <div className={`${styles.paddingX} ${styles.flexCenter} `}>
            <div className={`${styles.boxWidth}`}>
              <Info2 />
            </div>
          </div>
        </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} mb-14 pb-20`}>
        <div className={`${styles.boxWidth}`}>
          <OurTeam/>
        </div>
      </div> 

      <div className='bg-lightGrey w-full overflow-hidden mt-3 pb-12 '>
          <div className={`${styles.paddingX} ${styles.flexCenter} `}>
            <div className={`${styles.boxWidth}`}>
              <Partnerships />
            </div>
          </div>
        </div> 

    </div>
  )
}



export default AboutUsPage
