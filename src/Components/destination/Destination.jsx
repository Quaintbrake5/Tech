/* eslint-disable no-unused-vars */
import React from 'react'
import './destination.css'

const Destination = () => {
  return (
    <>
        <section className='destination' id='destination'>
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
                                <span>Tokyo</span>
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
                                    <span>New York</span>
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
                                    <span>Agra</span>
                                </div>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Destination
