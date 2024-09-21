/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <>
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Let's Take You There</h1>
          <p className="hero-subtitle">Discover beautiful destinations, cultures, and experiences.</p>
          <a href="#learn-more" className="hero-btn" id='learn-more'>Learn More</a>
        </div>
      </div>
    </section>

    <section className='destination' id='learn-more'>
            <div className='destination-container'>
                <div className='destination-header'>
                    <h2>Your destination. Our expertise.</h2>
                </div>

                <div className='destination-subheader'>
                    <span>DISCOVER SOME EXCITING DESTINATIONS</span>
                </div>

                <div className='destination-tiles'>
                    <div className='tile-section'>
                        <div className='tile-image'>
                            <a className='tile-link' href=''>
                                <div>
                                <img src='/src/assets/Shibuya crossing.jpg' alt='Tokyo, Japan'></img>
                                </div>

                                <div className='tile-header'>
                                <span>Shibuya, Japan</span>
                                </div>
                            </a>
                        </div>
                        <br/>

                        <div className='tile-image'>
                            <a className='tile-link' href=''>
                                <div>
                                    <img src='/src/assets/Times square.jpg' alt='New York, USA'></img>
                                </div>

                                <div className='tile-header'>
                                    <span>New York City, USA</span>
                                </div>
                            </a>
                        </div>
                        <br/>

                        <div className='tile-image'>
                            <a className='tile-link' href=''>
                                <div>
                                    <img src='/src/assets/Taj Mahal.jpg' alt='Agra, India'></img>
                                </div>

                                <div className='tile-header'>
                                    <span>Agra, India</span>
                                </div>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
    </section>

    <section className='review'>
      <div className='product-review' id='offer'>
        <div className='review-page'>
            <div className='review-image'>
              <img src='/src/assets/Review.jpg'></img>
            </div>

            <div className='review-page-comp'>
              <div className='review-page-comp-container'>
                <div className='review-header'>
                  <span>TESTED, TRUSTED, RECOMMENDED</span>
                </div>

                  {/* <div className='review-rating'>
                      <svg className="stars-reviews__icon"><use xlinkHref="#stars-reviews"></use></svg>
                  </div> */}

                <div className='review-social'>
                  <span>"Provides a seamless experience to plan your next trip!"</span>
                </div>

                <div className='review-text'>
                  <span>Double Serum, the intensive anti-aging serum for all ages and skin types, formulated with 21 plant extracts.</span>
                </div>

                <br/>

                <div className='review-proof'>
                  <Link to= './tourreview' className='proof-button'>
                    <button className='proof' >
                        <span>See for yourself</span>
                      </button>                 
                  </Link>

                </div>

              </div>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default HeroSection
