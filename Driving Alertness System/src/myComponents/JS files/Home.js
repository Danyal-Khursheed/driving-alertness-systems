import React from 'react'
import banner from '../images/banner.jpg'
import bottom from '../images/bottom.png'
import body_image1 from '../images/sleepy-man.png'
import body_image2 from '../images/body-image2.png'
import body_image3 from '../images/body-image3.png'
import body_image4 from '../images/body-image4.png'
import footer_top from '../images/footer-top.png'
import banner_footer from '../images/banner-footer.png'
import { motion } from 'framer-motion'



export const Home = () => {
    return (
        <>
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0,transition: {duration:0.4}}}
            
            
            class="d-none d-lg-block d-md-block">
                <div className='container-fluid home-body'>
                    <div class="image-container">
                        <img className='banner-img' src={banner} alt='banner img' />
                        <div class="after"></div>
                        <h1 className='banner-text'>Drive Safe Drive Smoothly</h1>
                    </div>

                    <div className='banner'>

                        {/* <img className='bottom-of-banner' src={banner_footer} alt='banner img' /> */}

                    </div>
                    <div className='body'>
                        <div className='heading'>
                            
                        </div>

                        <div className=' row mt-5'>
                            <div className='col-md-6 '>
                                <img className='body-image' src={body_image1} alt='image' />
                            </div>
                            <div className='col-md-6 body-text'>
                                Don't let drowsiness put you and others at risk.<br /> Our Driver Alertness System can help keep you
                                awake and focused on the road
                            </div>
                        </div>

                        {/* 2nd  row mt-5 of body */}

                        <div class=" row mt-5">

                            <div className='col-md-6 '>
                                <p className='body-text'>
                                    See the difference our Driver AlertnessSystem can make.
                                    Reduce accidentsand increase safety for your fleet and
                                    passengers by continuously analysing driver's beaviour
                                </p>
                            </div>
                            <div className='col-md-6  '>
                                <img className='body-image1' src={body_image2} alt='img' />
                            </div>
                        </div>

                        {/* 3nd  row mt-5 of body */}

                        <div class=" row mt-5">

                            <div className='col-md-6 '>
                                <img className='body-image' src={body_image3} alt='img' />
                            </div>

                            <div className='col-md-6'>
                                <p className='body-text '>
                                    Deploy our Driver Alertness System in your commercial fleet
                                    and protect your drivers, cargo, and reputation.Improve your
                                    bottom line with increased efficiency and reduced risk.
                                </p>
                            </div>

                        </div>


                        {/*  4nd  row mt-5 of body */}

                        <div class=" row mt-5">

                            <div className='col-md-6'>
                                <p className='body-text'>
                                    Drive with confidence and peace of mind knowing our Driver
                                    Alertness System is keeping you and your loved ones safe.
                                    Protect what matters most
                                </p>
                            </div>
                            <div className='col-md-6'>
                                <img className='body-image1' src={body_image4} alt='img' />
                            </div>
                        </div>

                    </div>


                </div>
            </motion.div>


            {/* Mobile */}

            <div class="d-lg-none d-xl-none d-lg-none d-md-none">
                <div className='container-fluid home-body'>
                    <div class="image-container-mobile">
                        <img className='banner-img-mobile' src={banner} alt='banner img' />

                        <h1 className='banner-text'>Drive Safe Drive Smoothly</h1>
                    </div>

                    <div className='banner'>

                        {/* <img className='bottom-of-banner' src={banner_footer} alt='banner img' /> */}

                    </div>
                    <div className='body'>
                        <div className='heading'>
                            <p>Heading 01</p>
                        </div>

                        <div className=' row mt-5'>
                            <div className='col-md-6 '>
                                <img className='body-image' src={body_image1} alt='image' />
                            </div>
                            <div className='col-md-6 body-text'>
                                Don't let drowsiness put you and others at risk.<br /> Our Driver Alertness System can help keep you
                                awake and focused on the road
                            </div>
                        </div>

                        {/* 2nd  row mt-5 of body */}

                        <div class=" row mt-5">

                            <div className='col-md-6 '>
                                <p className='body-text'>
                                    See the difference our Driver AlertnessSystem can make.
                                    Reduce accidentsand increase safety for your fleet and
                                    passengers by continuously analysing driver's beaviour
                                </p>
                            </div>
                            <div className='col-md-6  '>
                                <img className='body-image1' src={body_image2} alt='img' />
                            </div>
                        </div>

                        {/* 3nd  row mt-5 of body */}

                        <div class=" row mt-5">

                            <div className='col-md-6 '>
                                <img className='body-image' src={body_image3} alt='img' />
                            </div>

                            <div className='col-md-6'>
                                <p className='body-text '>
                                    Deploy our Driver Alertness System in your commercial fleet
                                    and protect your drivers, cargo, and reputation.Improve your
                                    bottom line with increased efficiency and reduced risk.
                                </p>
                            </div>

                        </div>


                        {/*  4nd  row mt-5 of body */}

                        <div class=" row mt-5">

                            <div className='col-md-6'>
                                <p className='body-text'>
                                    Drive with confidence and peace of mind knowing our Driver
                                    Alertness System is keeping you and your loved ones safe.
                                    Protect what matters most
                                </p>
                            </div>
                            <div className='col-md-6'>
                                <img className='body-image1' src={body_image4} alt='img' />
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}

export default Home