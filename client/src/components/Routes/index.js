import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from '../NavBar';
// import Footer from '../Footer';
import Home from '../../pages/Home';
import User from '../../pages/User';
import Sidebar from '../Sidebar';
import './index.css';


const Router = () => {

  return (
    <>
      <BrowserRouter>
        <div className="h-100 w-100 ps-0 pe-0">
          <div className="row h-100">

            <div className="col-2 h-100 pe-0">
              <Sidebar />

            </div>

            <div className="col-10">
              <div className="nav">
                <NavBar />
              </div>
              <div className="content-menu">
                <Routes>

                  <Route path="/" element={<Home />} />
                  <Route path="/user" element={<User />} />

                </Routes>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default Router;