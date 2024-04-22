import { Route, Routes } from 'react-router-dom';
import Marketing from './components/MainPageComponents/Marketing';
import Navbar from './components/Navbar';
import styles from './styles';
import Info from './components/MainPageComponents/Info';
import Services from './components/MainPageComponents/Services';
import Carusel from './components/MainPageComponents/Carusel';
import Projects from './components/MainPageComponents/Projects';
import Info2 from './components/MainPageComponents/Info2';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import AboutUsPage from './components/pages/AboutUsPage';
import  ServicesPage from "./components/pages/ServicesPage";
import  NewsPage  from "./components/pages/NewsPage";
import  ContactUsPage  from "./components/pages/ContactUsPage";
import MainPage from './components/pages/MainPage';

function App() {
  return (
    <div>
      <div>
      <div className='bg-secondary w-full overflow-hidden py-3'>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
        </div>

        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path="/about" element={<AboutUsPage/>} />
          <Route path="/services" element={<ServicesPage/>} />
          <Route path="/news" element={<NewsPage/>} />
          <Route path="/contact" element={<ContactUsPage/>} />
        </Routes>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Newsletter />
          </div>
        </div> 

        <div className='bg-[#1b1b1b] w-full overflow-hidden py-3 pb-10'>
          <div className={` ${styles.flexCenter} px-10`}>
            <div className={`${styles.boxWidth}`}>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
