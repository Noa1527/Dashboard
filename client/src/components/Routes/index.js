import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Navbar from '../Navbar';
// import Footer from '../Footer';
import Home from '../../pages/Home';
import Sidebar from '../Sidebar';


const Router = () => {

  return (
    <>
      <BrowserRouter>
      <Sidebar/>
        {/* <Navbar /> */}
        <Routes>

          {/* <Route path="/" element={<Home />} /> */}

        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default Router;