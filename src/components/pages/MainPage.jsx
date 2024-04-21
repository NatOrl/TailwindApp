import React from 'react'
import Marketing from '../MainPageComponents/Marketing'
import Navbar from '../Navbar'
import styles from '../../styles'
import Info from '../MainPageComponents/Info'
import Services from '../Services'
import Carusel from '../MainPageComponents/Carusel'
import Projects from '../MainPageComponents/Projects'
import Info2 from '../MainPageComponents/Info2'
import Newsletter from '../Newsletter'
import Footer from '../Footer'

const MainPage = () => {
  return (
    <div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Marketing />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Info />
            <Services />
          </div>
        </div>

        <div className='bg-lightGrey w-full overflow-hidden py-3 pb-10'>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Carusel />
            </div>
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Projects />
            <Info2 />
          </div>
        </div>
    </div>
  )
}

export default MainPage
