import React from 'react'
import '../CSS_files/Header.css'
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { Home } from '../JS files/Home';
import { Application } from '../JS files/Application';
import { Services } from '../JS files/Services';
import { Subscription } from '../JS files/Subscription';
import { Login } from '../JS files/Login'

export const Header = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm fixed-top ">
                    <div className="container-fluid">
                        <a className="navbar-brand brandIcon" href="#"><img className='logo' src={logo} alt='logo' /></a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse navbar-nav ml-auto" id="navbarSupportedContent">
                            <ul className=" navbar-nav ms-auto mb-2 mb-lg-0">


                                <li  className="nav-item navItems active text ">
                                    <Link className='nav-link' to='/'>Home</Link>
                                </li>

                                <li className="nav-item navItems text">
                                    <Link className='nav-link' to='services'>Services</Link>
                                </li>

                                <li className="nav-item navItems text">
                                    <Link className='nav-link' to='application'>Application</Link>
                                </li>

                                <li className="nav-item navItems text">
                                    <Link className='nav-link' to='subscription'>Subscription</Link>
                                </li>


                                <Link ><button type='button' className='NavButton' data-toggle="modal" data-target="#exampleModalCenter">Login</button></Link>





                            </ul>

                        </div>
                    </div>
                </nav>
            </header>

        {/* Footer */}
        

            {/*log in Pop up */}

{/* 
<!-- Modal --> */}
<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
 <div className="modal-dialog modal-dialog-centered" role="document">
   <div className="modal-content text-center">
   <div className="container p-4">
          <div className="testbox">
          <form action="/">
            <div className="banner">
              <h1 className='header'>Login</h1>
            </div>
            <div className="item">
              <p>Email</p>
              <div className="name-item">
                <input className="input"  type="email" name="location"/>
              </div>
            </div>
            
            

            <div className="item">
              <p>Password</p>
              <input type="password" className="input" name="Email" 
              required/>
            </div>

            
            
            
            
                  
              
            <div className="btn-block btn">
              <button className='NavButton' type="submit" href="" >Submit</button>
            </div>
          </form>
        </div>
        </div>
        </div>
        </div>
        </div>

        </>
    )
}
