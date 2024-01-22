import React from 'react'
import footer_top from '../images/footer-top.png'
import banner_footer from '../images/banner-footer.png'
import '../CSS_files/Home.css'

const Footer = () => {
  return (
    <>
    <footer>
                    <img className='bottom-of-banner' src={footer_top} alt='banner img' />
                    <div className='footer'>
                        <section className="">
                            {/* <!-- Footer --> */}
                            <footer className="text-center text-white" style={{ backgroundColor:' #2a9d8f' }}>
                               

                                {/* <!-- Copyright --> */}
                                <div className="text-center p-3" style={{ backgroundColor:'#2a9d8f'}} >
                                 
                                </div>
                                {/* <!-- Copyright --> */}
                            </footer>
                            {/* <!-- Footer --> */}
                        </section>
                    </div>
                </footer>
    </>
  )
}

export default Footer