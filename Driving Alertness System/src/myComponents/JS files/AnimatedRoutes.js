import React from 'react'
import { useLocation } from "react-router-dom";
import { createBrowserHistory } from 'history';
import PrivateRoute from './PrivateRoute';
import { Header } from './Header';
import { Header2 } from './Header2';
import { Route, Router, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Application } from './Application';
import { Services } from './Services';
import { Subscription } from './Subscription';
import { Complain } from './Complain';
import Footer from './Footer';
import { UpdateProfile } from './UpdateProfile';
import { AnimatePresence } from 'framer-motion';
import Header3 from './Header3';
import UpdateModel from './UpdateModel';



const AnimatedRoutes = () => {
    const location = useLocation();

  return (
    <AnimatePresence>
    <Routes>   
        
    <Route path='/' element={<Home/>} key={location.pathname} />
    <Route path='application' element={<Application/>} />
    <Route path='services' element={<Services/>} />
    <Route path='subscription' element={<Subscription/>} />
    <Route path='complain' element={<Complain/>} />
    <Route path='updateprofile' element={<UpdateProfile/>} />
    <Route path='updatemodel' element={<UpdateModel/>} />
    
    </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes