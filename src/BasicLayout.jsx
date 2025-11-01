import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/footer';
import Navbar from './Components/Navbar/Navbar';


const BasicLayout = () => {
  return (
    <div> 
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default BasicLayout