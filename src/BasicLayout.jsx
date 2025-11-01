import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'

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