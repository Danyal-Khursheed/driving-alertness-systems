import React from 'react'
import { Outlet } from 'react-router-dom'
import Header2 from './Header2'
import Footer from './Footer'

export const PrivateRoute = () => {
  return (
    <>
        <Header2/>
        <Outlet/>
        <Footer/>
    
    </>
  )
}
export default PrivateRoute;
