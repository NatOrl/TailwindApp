import Marketing from './components/Marketing';
import Navbar from './components/Navbar';
import styles from './styles';
import Info from './components/Info';
import Services from './components/Services';
import Carusel from './components/Carusel';
import Projects from './components/Projects';
import Info2 from './components/Info2';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className='bg-secondary w-full overflow-hidden py-3'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Marketing/> 
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Info/>
          <Services/>
        </div>
      </div>

      <div className='bg-lightGrey w-full overflow-hidden py-3 pb-10'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Carusel/>
          </div>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Projects/>
          <Info2/>
          <Newsletter/>
        </div>
      </div>

      <div className='bg-[#1b1b1b] w-full overflow-hidden py-3 pb-10'>
        <div className={` ${styles.flexCenter} px-10`}>
          <div className={`${styles.boxWidth}`}>
            <Footer/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
