import React from 'react'
import '../CSS_files/Update.css'

export const UpdateProfile = () => {
    return (
        <>
        
          <div className="container Form ">
          <div className="testbox">
          <form action="/">
            <div className="banner">
              <h1 className='header'>Update Profile</h1>
            </div>
            <div className="item">
              <p>Email</p>
              <div className="name-item">
                <input className="input"  type="email" name="location"/>
              </div>
            </div>
            <div className="item">
                <p>Name:</p>
                <div className="name-item">
                  <input type="text" className="input" name="Name"
                  required/>
              </div>
            </div>
            <div className="item">
              <p>Phone NO</p>
              <input type="cell" className="input" name="Email" 
              required/>
            </div>

            <div className="item">
              <p>Password</p>
              <input type="password" className="input" name="Email" 
              required/>
            </div>

            <div className="item">
              <p>Confirm Password</p>
              <input type="password" className="input" name="Email" 
              required/>
            </div>
            
            
            
                  
              
            <div className="btn-block btn">
              <button className='NavButton' type="submit" href="" >Submit</button>
            </div>
          </form>
        </div>
        </div>
        </>
    )
}
