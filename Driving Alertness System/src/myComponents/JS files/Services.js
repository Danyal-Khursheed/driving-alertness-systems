import React from 'react'
import '../CSS_files/Home.css'
import service_banner from '../images/service-banner.jpg';
import first_service from '../images/1st_service.png';
import second_service from '../images/second_service.png';
import third_service from '../images/third_service.jpg';
import fourth_service from '../images/fourth_service.png';
import fifth_service from '../images/fivth_service.jpg';
import sixth_service from '../images/sixth_service.png';
import { motion } from 'framer-motion'

export const Services = () => {
  return (
    <>
    <motion.div
            initial={{width:0}}
            animate={{width:'100%'}}
            exit={{x: window.innerWidth,transition: {duration:0.2}}}
    
    class="d-none d-lg-block d-md-block">
            <div className='container-fluid home-body'>
                <div class="image-container">
                <img className='banner-img' src={service_banner} alt='banner img' />
                   <div class="after"></div> 
                   <h1 className='banner-text'>Drive Safe Drive Smoothly</h1>
                </div>
                
                <div className='banner'>
                   
                    {/* <img className='bottom-of-banner' src={banner_footer} alt='banner img' /> */}

                </div>
                <div className='body'>
                    <div className='heading mt-5'>
                        <p>Model Updates:</p>
                    </div>

                    <div className=' row mt-5'>
                        <div className='col-md-6 mt-4 '>
                            <img className='body-image' src={first_service} alt='image' />
                        </div>
                        <div className='col-md-6 body-text text-left'>
                        Stay up-to-date with the latest version of our Driver Alertness System model. Our product is constantly
                        being updated to provide the most accurate and reliable performance possible. Download the latest version from
                        our website and enjoy the peace of mind that comes with our cutting-edge technology.
                        </div>
                    </div>

                    {/* 2nd  row mt-5 of body */}
                    <div className='heading mt-5'>
                        <p>Complaint Registry:</p>
                    </div>
                    <div className=' row mt-5'>
                        <div className='col-md-6 mt-4 '>
                            <img className='body-image' src={second_service} alt='image' />
                        </div>
                        <div className='col-md-6 body-text text-left'>
                        We take your feedback seriously. Our complaint registry feature allows you to register any complaints or feedback
                        about the model's performance. Upload footage, share your comments, and help us improve our product to ensure 
                          a safer and more efficient driving experience for all.

                        </div>
                    </div>

                    {/* 3rd  row mt-5 of body */}
                    <div className='heading mt-5'>
                        <p>Email/Phone Notification:</p>
                    </div>
                    <div className=' row mt-5'>
                        <div className='col-md-6 mt-4 '>
                            <img className='body-image' src={third_service} alt='image' />
                        </div>
                        <div className='col-md-6 body-text text-left'>
                        Stay informed and safe on the road with our email/phone notification service. Receive alerts directly to your
                        registered number or email when your alertness level starts to decrease, so you can take the necessary steps to avoid
                        drowsiness and stay focused on driving.

                        </div>
                    </div>

                    {/* 4th  row mt-5 of body */}
                    <div className='heading mt-5'>
                        <p>Real Time Dashboard:</p>
                    </div>
                    <div className=' row mt-5'>
                        <div className='col-md-6 mt-4 '>
                            <img className='body-image' src={fourth_service} alt='image' />
                        </div>
                        <div className='col-md-6 body-text'>
                        Keep track of your alertness stats in real time with our customizable dashboard. Monitor your alertness levels,
                        receive alerts when they drop, and get insights into your driving behavior so you can make more informed
                        decisions on the road.

                        </div>
                    </div>

                    {/* 5th  row mt-5 of body */}
                    <div className='heading mt-5'>
                        <p>Real Time Face View:</p>
                    </div>
                    <div className=' row mt-5'>
                        <div className='col-md-6 mt-4 '>
                            <img className='body-image' src={fifth_service} alt='image' />
                        </div>
                        <div className='col-md-6 body-text text-left'>
                        With our real-time face view feature, you can monitor your alertness level and driving behavior directly from
                        your dashboard. Our AI-powered model constantly analyzes your facial expressions and movements to
                        provide accurate and timely feedback on your alertness level.

                        </div>
                    </div>

                    {/* 6th  row mt-5 of body */}
                    <div className='heading mt-5'>
                        
                    </div>
                    <div className=' row mt-5'>
                        <div className='col-md-6 mt-4 '>
                            <img className='body-image' src={sixth_service} alt='image' />
                        </div>
                        <div className='col-md-6 body-text text-left'>
                        Keep track of your ride alertness stats history with our personalized dashboard. Review your past performance, 
                        identify patterns and trends, and make data-driven decisions to improve your alertness levels and enhance your
                          driving experience

                        </div>
                    </div>
                    

                
                
                  </div>          
            </div>

            </motion.div>



{/* Mobile Responsive */}

<div class="d-lg-none d-xl-none d-lg-none d-md-none">
            <div className='container-fluid home-body'>
                <div class="image-container-mobile">
                <img className='banner-img-mobile' src={service_banner} alt='banner img' />
                   <div class="after"></div> 
                   <h1 className='banner-text'>Drive Safe Drive Smoothly</h1>
                </div>
                
                <div className='banner'>
                   
                    {/* <img className='bottom-of-banner' src={banner_footer} alt='banner img' /> */}

                </div>
                <div className='body'>
                    <div className='heading mt-5'>
                        <p>Model Updates:</p>
                    </div>

                    <div className=' row mt-5'>
                        <div className='col-md-6 mt-4 '>
                            <img className='body-image' src={first_service} alt='image' />
                        </div>
                        <div className='col-md-6 body-text text-left'>
                        Stay up-to-date with the latest version of our Driver Alertness System model. Our product is constantly
                        being updated to provide the most accurate and reliable performance possible. Download the latest version from
                        our website and enjoy the peace of mind that comes with our cutting-edge technology.
                        </div>
                    </div>

                    {/* 2nd  row mt-5 of body */}
                    <div className='heading mt-5'>
                        <p>Complaint Registry:</p>
                    </div>
                    <div className=' row mt-5'>
                        <div className='col-md-6 mt-4 '>
                            <img className='body-image' src={second_service} alt='image' />
                        </div>
                        <div className='col-md-6 body-text text-left'>
                        We take your feedback seriously. Our complaint registry feature allows you to register any complaints or feedback
                        about the model's performance. Upload footage, share your comments, and help us improve our product to ensure 
                          a safer and more efficient driving experience for all.

                        </div>
                    </div>

                    {/* 3rd  row mt-5 of body */}
                    <div className='heading mt-5'>
                        <p>Email/Phone Notification:</p>
                    </div>
                    <div className=' row mt-5'>
                        <div className='col-md-6 mt-4 '>
                            <img className='body-image' src={third_service} alt='image' />
                        </div>
                        <div className='col-md-6 body-text text-left'>
                        Stay informed and safe on the road with our email/phone notification service. Receive alerts directly to your
                        registered number or email when your alertness level starts to decrease, so you can take the necessary steps to avoid
                        drowsiness and stay focused on driving.

                        </div>
                    </div>

                    {/* 4th  row mt-5 of body */}
                    <div className='heading mt-5'>
                        <p>Real Time Dashboard:</p>
                    </div>
                    <div className=' row mt-5'>
                        <div className='col-md-6 mt-4 '>
                            <img className='body-image' src={fourth_service} alt='image' />
                        </div>
                        <div className='col-md-6 body-text'>
                        Keep track of your alertness stats in real time with our customizable dashboard. Monitor your alertness levels,
                        receive alerts when they drop, and get insights into your driving behavior so you can make more informed
                        decisions on the road.

                        </div>
                    </div>

                    {/* 5th  row mt-5 of body */}
                    <div className='heading mt-5'>
                        <p>Real Time Face View:</p>
                    </div>
                    <div className=' row mt-5'>
                        <div className='col-md-6 mt-4 '>
                            <img className='body-image' src={fifth_service} alt='image' />
                        </div>
                        <div className='col-md-6 body-text text-left'>
                        With our real-time face view feature, you can monitor your alertness level and driving behavior directly from
                        your dashboard. Our AI-powered model constantly analyzes your facial expressions and movements to
                        provide accurate and timely feedback on your alertness level.

                        </div>
                    </div>

                    {/* 6th  row mt-5 of body */}
                    <div className='heading mt-5'>
                        
                    </div>
                    <div className=' row mt-5'>
                        <div className='col-md-6 mt-4 '>
                            <img className='body-image' src={sixth_service} alt='image' />
                        </div>
                        <div className='col-md-6 body-text text-left'>
                        Keep track of your ride alertness stats history with our personalized dashboard. Review your past performance, 
                        identify patterns and trends, and make data-driven decisions to improve your alertness levels and enhance your
                          driving experience

                        </div>
                    </div>
                    

                
                
                  </div>          
            </div>

            </div>

    </>
  )
}
