/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import './styles/Footer.css'

function Footer() {
  return (
    <>
        <section className='footer'>
            <div className='footer-container'>
                <div className='desktop'>
                    <div className='footer-links-table'>
                        <div className='footer-links'>
                            <h2 className='title'>ABOUT US</h2>
                            <ul>
                                <li>
                                    <a href="" className="link">Our Mission</a>
                                </li>
                                <li>
                                    <a href="" className="link">Our Vision</a>
                                </li>
                                <li>
                                    <a href="" className="link">Meet the team Team</a>
                                </li>

                            </ul>
                        </div>

                        {/* <div className='footer-links'>
                            <h2 className='title'>CAREERS</h2>
                            <ul>
                                <li>
                                    <a href="" className="link">Your Career</a>
                                </li>
                                <li>
                                    <a href="" className="link">Recruitment Process</a>
                                </li>
                            </ul>
                        </div> */}

                        <div className='footer-links'>
                            <h2 className='title'>CONTACT US</h2>
                            <ul>
                                <li>
                                    <a href="" className="link">Call Us Now</a>
                                </li>

                                <li>
                                    <a href="" className="link">Send an Email</a>
                                </li>

                                <li>
                                    <a href="" className="link">Visit our offices</a>
                                </li>
                            </ul>
                        </div>

                        <div className='footer-links'>
                            <h2 className='title'>Trip Catalogue</h2>
                            <ul>
                                <li>
                                    <a>Trips to: </a>
                                </li>
                                
                                <li>
                                    <a href="" className="link">North America</a>
                                </li>
                                <li>
                                    <a href="" className="link">South America</a>
                                </li>

                                <li>
                                    <a href="" className="link">Africa</a>
                                </li>

                                <li>
                                    <a href="" className="link">Asia</a>
                                </li>

                                <li>
                                    <a href="" className="link">Europe</a>
                                </li>

                                <li>
                                    <a href="" className="link">Oceania</a>
                                </li>
                            </ul>
                        </div>

                        <div className='footer-links'>
                            <h2 className='title'>Review</h2>
                            <ul>
                                <li>
                                    <a className="link">What other's have said...</a>
                                </li>

                            </ul>
                        </div>
                        
                    </div>
                </div>

                <div className='social-links'>
                    <div className='left-text'>
                        <div className='phones'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone mr-1">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>

                            <a href="tel:0201 280 2500"><span>0201 280 2500,</span></a>
                            <a href="tel:07003000000" ><span>  07003000000</span></a>
                        </div>
                    </div>

                    {/* <div className='middle-text'>
                        <div className='app-store'>
                            <div className='store'>Access Mobile Apps</div>
                            <div className='app-store-icons'>
                                <a href="https://apps.apple.com/ng/app/access-more/id1501024389" target="_blank">
                                    <img src="https://e-cdns-assets.dzcdn.net/common/images/apple-store-badge/en.svg" alt="Get App on App Store"></img>
                                </a>
                            </div>

                            <div className='app-store-icons'>
                                <a href="https://play.google.com/store/apps/details?id=com.accessbank.nextgen&amp;hl=en" target="_blank">
                                    <img src="https://e-cdns-assets.dzcdn.net/common/images/play-store-badge/en.svg" alt="Get App on Play store"></img>
                                </a>
                            </div>
                        </div>
                    </div> */}

                    <div className='right-text'>
                        <div className='social-icons'>
                            <span>We're social : </span>
                            <div className='icons'>
                                <a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"></path>
                                    </svg>
                                </a>

                                <a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
                                    </svg>
                                </a>

                                <a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"></path>
                                    </svg>
                                </a>

                                <a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"/>
                                    </svg>
                                </a>

                                <a href=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        
                    </div>
                </div>

                <div className="legal">
                    <div className="legal-list">
                        <div className="legal-list-copyright">@ 2024 Code_Crafters</div>
                        <div className="index-navbar">
                            <span className="icon-chevron-down "></span>
                            <br/>
                            <span className="lang-label">English</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}
export default Footer
