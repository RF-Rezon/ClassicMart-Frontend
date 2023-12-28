import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';


const BasicLayout = () => {
  return (
    // <div>
    <div className='bg-watch-bg min-h-screen'> 
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default BasicLayout