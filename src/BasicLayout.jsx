import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import ScrollToTop from './Utils/ScrollToTop';

const BasicLayout = () => {
  return (
    <div> 
      <Navbar />
       <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  )
}

export default BasicLayout