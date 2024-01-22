import React from 'react'
import '../CSS_files/Home.css'
import app_banner from '../images/app-banner.png'
import truck from '../images/truck.png'
import public_trans from '../images/public-trans.png'
import personal from '../images/personal.png'
import driving_lessons from '../images/driving-lessons.png'
import { motion } from 'framer-motion'

export const Application = () => {
  return (
    <>
    <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0,transition: {duration:0.4}}} 
            class="d-none d-lg-block d-md-block">
            <div className='container-fluid home-body'>
                <div class="image-container">
                <img className='banner-img' src={app_banner} alt='banner img' />
                   <div class="after"></div> 
                   <h1 className='banner-text'>Drive Safe Drive Smoothly</h1>
                </div>

                <div className='banner'>
                   
                    {/* <img className='bottom-of-banner' src={banner_footer} alt='banner img' /> */}

                </div>
                <div className='body'>
                    <div className='heading mt-5'>
                        <p>Commercial Fleets</p>
                    </div>

                    <div className=' row mt-5'>
                        <div className='col-md-6 mt-4 '>
                            <img className='body-image' src={truck} alt='image' />
                        </div>
                        <div className='col-md-6 body-text'>
                        Protect your fleet and keep your drivers safe with our Driver Alertness System.<br/> Our advanced technology can detect drowsiness and lert drivers before an accident occurs,
                        <br/> reducing the risk of collisions and increasing productivity.

                        </div>
                    </div>

                    {/* 2nd  row mt-5 of body */}
                    
                    <div className='heading mt-5'>
                        <p>Public Transportation</p>
                    </div>
                    <div class=" row mt-5">

                        <div className='col-md-6 '>
                            <p className='body-text'>
                            Passenger safety is a top priority in public transportation. Our Driver Alertness<br/>
                            System can help prevent accidents caused by driver fatigue and ensure a smooth,<br/>
                            comfortable ride for all passengers
                            </p>
                        </div>
                        <div className='col-md-6 mt-4 '>
                            <img className='body-image1' src={public_trans} alt='img' />
                        </div>
                    </div>

                    {/* 3nd  row mt-5 of body */}
                    <div className='heading mt-5'>
                        <p>Personal Vehicles</p>
                    </div>
                    <div class=" row mt-5">

                        <div className='col-md-6 mt-4'>
                            <img className='body-image' src={personal} alt='img' />
                        </div>

                        <div className='col-md-6'>
                            <p className='body-text '>
                            Long drives can be tiring, but our Driver Alertness System can help you stay alert <br/>
                            and focused on the road. Whether you're driving for work or pleasure, our<br/>
                            technology can help you arrive safely at your destination
                            </p>
                        </div>

                    </div>


                    {/*  4nd  row mt-5 of body */}
                    <div className='heading mt-5'>
                        <p>Driver Training and Education</p>
                    </div>
                    <div class=" row mt-5 mb-5">

                        <div className='col-md-6'>
                            <p className='body-text'>
                            The Driver Alertness System isn't just for commercial fleets and personal vehicles but <br/>
                            also in the field of driver training and education. The system can help driving schools and<br/>
                            instructors to identify and address potential issues before they become a problem
                            </p>
                        </div>
                        <div className='col-md-6 mt-4'>
                            <img className='body-image1' src={driving_lessons} alt='img' />
                        </div>
                    </div>

                </div>
                
                            
            </div>
            </motion.div>

            {/* Mobile */}


            <div class="d-lg-none d-xl-none d-lg-none d-md-none">
            <div className='container-fluid home-body'>
                <div class="image-container-mobile">
                <img className='banner-img-mobile' src={app_banner} alt='banner img' />
                   <div class="after"></div> 
                   <h1 className='banner-text'>Drive Safe Drive Smoothly</h1>
                </div>

                <div className='banner'>
                   
                    {/* <img className='bottom-of-banner' src={banner_footer} alt='banner img' /> */}

                </div>
                <div className='body'>
                    <div className='heading mt-5'>
                        <p>Commercial Fleets</p>
                    </div>

                    <div className=' row mt-5'>
                        <div className='col-md-6 mt-4 '>
                            <img className='body-image' src={truck} alt='image' />
                        </div>
                        <div className='col-md-6 body-text'>
                        Protect your fleet and keep your drivers safe with our Driver Alertness System.<br/> Our advanced technology can detect drowsiness and lert drivers before an accident occurs,
                        <br/> reducing the risk of collisions and increasing productivity.

                        </div>
                    </div>

                    {/* 2nd  row mt-5 of body */}
                    
                    <div className='heading mt-5'>
                        <p>Public Transportation</p>
                    </div>
                    <div class=" row mt-5">

                        <div className='col-md-6 '>
                            <p className='body-text'>
                            Passenger safety is a top priority in public transportation. Our Driver Alertness<br/>
                            System can help prevent accidents caused by driver fatigue and ensure a smooth,<br/>
                            comfortable ride for all passengers
                            </p>
                        </div>
                        <div className='col-md-6 mt-4 '>
                            <img className='body-image1' src={public_trans} alt='img' />
                        </div>
                    </div>

                    {/* 3nd  row mt-5 of body */}
                    <div className='heading mt-5'>
                        <p>Personal Vehicles</p>
                    </div>
                    <div class=" row mt-5">

                        <div className='col-md-6 mt-4'>
                            <img className='body-image' src={personal} alt='img' />
                        </div>

                        <div className='col-md-6'>
                            <p className='body-text '>
                            Long drives can be tiring, but our Driver Alertness System can help you stay alert <br/>
                            and focused on the road. Whether you're driving for work or pleasure, our<br/>
                            technology can help you arrive safely at your destination
                            </p>
                        </div>

                    </div>


                    {/*  4nd  row mt-5 of body */}
                    <div className='heading mt-5'>
                        <p>Driver Training and Education</p>
                    </div>
                    <div class=" row mt-5 mb-5">

                        <div className='col-md-6'>
                            <p className='body-text'>
                            The Driver Alertness System isn't just for commercial fleets and personal vehicles but <br/>
                            also in the field of driver training and education. The system can help driving schools and<br/>
                            instructors to identify and address potential issues before they become a problem
                            </p>
                        </div>
                        <div className='col-md-6 mt-4'>
                            <img className='body-image1' src={driving_lessons} alt='img' />
                        </div>
                    </div>

                </div>
                
                            
            </div>
            </div>
        </>
  )
}
