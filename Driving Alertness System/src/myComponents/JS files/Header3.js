import React from 'react'
import '../CSS_files/Header3.css'
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Header3 = () => {
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


                                
                            <Link ><button type='button' className='NavButton' data-toggle="modal" data-target="#exampleModalCenter1">Register User</button></Link>

                                <Link ><button type='button' className='NavButton' data-toggle="modal" data-target="#exampleModalCenter">Remove User</button></Link>





                            </ul>

                        </div>
                    </div>
                </nav>
            </header>

        {/* Footer */}
        

            {/*log in Pop up */}

{/* 
<!-- Modal register --> */}
<div className="modal fade" id="exampleModalCenter1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
 <div className="modal-dialog modal-dialog-centered" role="document">
   <div className="modal-content text-center">
   <div className="container p-4">
          <div className="testbox">
          <form action="/">
            <div className="banner">
              <h1 className='header'>Register User</h1>
            </div>
            <div className="item">
              <p>Name</p>
              <div className="name-item">
                <input className="input"  type="text" name="name"/>
              </div>
            </div>

            <div className="item">
              <p>Last Name</p>
              <div className="name-item">
                <input className="input"  type="text" name="lname"/>
              </div>
            </div>

            <div className="item">
              <p>Email</p>
              <div className="name-item">
                <input className="input"  type="email" name="location"/>
              </div>
            </div>

            <div className="item">
              <p>Phone No</p>
              <div className="name-item">
                <input className="input"  type="cell" name="phone"/>
              </div>
            </div>

            <div className="item">
              <p>Username</p>
              <div className="name-item">
                <input className="input"  type="text" name="username"/>
              </div>
            </div>

            <div className="item">
              <p>Password</p>
              <div className="name-item">
                <input className="input"  type="password" name="pass"/>
              </div>
            </div>
            
            

            <div className="item">
              <p> Confirm Password</p>
              <input type="password" className="input" name="cpass" 
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




      {/* {<!-- Modal register 2 --> */} 
<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
 <div className="modal-dialog modal-dialog-centered" role="document">
   <div className="modal-content text-center">
   <div className="container p-4">
          <div className="testbox">
          <form action="/">
            <div className="banner">
              <h1 className='header'>Remove User</h1>
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

export default Header3