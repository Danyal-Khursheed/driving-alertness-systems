import React from 'react'
import '../CSS_files/Subscription.css'
import { FaCheck } from 'react-icons/fa';

export const Subscription = () => {
  return (
    <>
      <div className="d-none d-lg-block d-md-block">
      <div className='conatiner subscription text-center'>
        <div className='col-md-3'></div>
        <div className='col-md-3 basic'>
          <div className='head'>
            <div className='title'>
              <h2>Basic</h2>
            </div>
            
          </div>
          <div className='body2'>
            <div id="containerIntro">
              <h1 class="start">25 </h1>
              <p class="start">$</p>
            </div>
            <div className='list'>
            <li>  Alertness Tracking</li>
            <li>  Alert Using Buzzer</li>
            <li>  Accident Detection</li>
            <li>  Accident Photage Saving</li>
           
            </div>
            <div className='footerr'>
            <h5>30 days free Trail</h5>
          </div>
          </div>
          <button type='button' className='Navutton' >Buy</button>
          
        </div>
        <div className='col-md-3 premium'>
          <div className='head'>
            <div className='title'>
              <h2>Premium</h2>
            </div>
            
          </div>
          <div className='body0'>
            <div id="containerIntro">
              <h1 class="start">25 </h1>
              <p class="start">$</p>
            </div>
            <div className='list'>
            <li>  Alertness Tracking</li>
            <li>  Alert Using Buzzer</li>
            <li>  Accident Detection</li>
            <li>  Accident Photage Saving</li>
            <li>  Real Time Dashboard</li>
            <li>  Ride Stat History</li>
           
            </div>
            <div className='footerr'>
            <h5>30 days free Trail</h5>
          </div>
          </div>
          <button type='button' className='Navutton' >Buy</button>
        </div>
        <div className='col-md-3'></div>
      </div>
      </div>



      {/* Mobile */}


      <div className="d-lg-none d-xl-none d-lg-none d-md-none">
      <div className='conatiner subscription-mobile text-center'>
        <div className='col-md-3'></div>
        <div className='col-md-3 basic-mobile'>
          <div className='head-mobile'>
            <div className='title-mobile'>
              <h2>Basic</h2>
            </div>
            
          </div>
          <div className='body2'>
            <div id="containerIntro">
              <h1 class="start">25 </h1>
              <p class="start">$</p>
            </div>
            <div className='list'>
            <li>  Alertness Tracking</li>
            <li>  Alert Using Buzzer</li>
            <li>  Accident Detection</li>
            <li>  Accident Photage Saving</li>
           
            </div>
            <div className='footerr'>
            <h5>30 days free Trail</h5>
          </div>
          </div>
          <button type='button' className='Navutton' >Buy</button>
          
        </div>
        <div className='col-md-3 premium-mobile'>
          <div className='head'>
            <div className='title'>
              <h2>Premium</h2>
            </div>
            
          </div>
          <div className='body0'>
            <div id="containerIntro">
              <h1 class="start">25 </h1>
              <p class="start">$</p>
            </div>
            <div className='list'>
            <li>  Alertness Tracking</li>
            <li>  Alert Using Buzzer</li>
            <li>  Accident Detection</li>
            <li>  Accident Photage Saving</li>
            <li>  Real Time Dashboard</li>
            <li>  Ride Stat History</li>
           
            </div>
            <div className='footerr'>
            <h5>30 days free Trail</h5>
          </div>
          </div>
          <button type='button' className='Navutton' >Buy</button>
        </div>
        <div className='col-md-3'></div>
      </div>
      </div>
    </>
  )
}


{/* <div className='bbody'>
        <div className='container text-center'>

          <div className='col-sm-3'></div>
          <div className='col-sm-3 basic'>
            <div className='title '>
              <h2>Basic</h2>
              <div className='inner-div mt-4'>
                <div id="textbox">
                  <h5 className="alignleft">Free</h5>
                  <h5 className="aligncenter">Pro</h5>
                  <h5 className="alignright">Team</h5>
                </div>
                
              </div>
            </div>

          </div>
          <div className='col-sm-3 premium'>
            <div className='head'>
              <div className='title '>
                <h2>Basic</h2>
              </div>

              <div id="textbox mt-4">
                <h5 className="alignleft">Free</h5>
                <h5 className="aligncenter">Pro</h5>
                <h5 className="alignright">Team</h5>

              </div>
              <div className='DIVBODY'>
                  hello
              </div>
            </div>
            </div>
            <div className='col-sm-3'></div>
          </div>

        </div> */}
