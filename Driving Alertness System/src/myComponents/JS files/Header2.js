import React from 'react'
import '../CSS_files/Header.css'
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { Home } from '../JS files/Home';

import { Login } from '../JS files/Login'

export const Header2 = () => {
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
                            <Link className='nav-link' to='updateprofile'>Update Profile</Link>
                        </li>

                       


                        <Link to='/'><button type='button' className='NavButton' >LogOut</button></Link>





                    </ul>

                </div>
            </div>
        </nav>
    </header>


</>
  )
}

export default Header2