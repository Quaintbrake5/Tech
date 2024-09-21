/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import './styles/review.css'

const Review = () => {
  return (
    <>
        <br/>
        <section className='review'>
            <div className='product-review' id='offer'>
                <div className='review-page'>
                    <div className='review-image'>
                    <img src='https://www.clarins.ca/on/demandware.static/-/Library-Sites-clarins-v3/default/dw485c4992/Homepage_CBA/Social_proof/CBA_HP_Social-400x400_21.jpg'></img>
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
                        <span>"It makes skin look moisturized and healthy after application!"</span>
                        </div>

                        <div className='review-text'>
                        <span>Double Serum, the intensive anti-aging serum for all ages and skin types, formulated with 21 plant extracts.</span>
                        </div>

                        <br/>

                        <div className='review-proof'>
                        <a className='proof-button' href='https://www.clarins.ca/en/double-serum-anti-aging-anti-wrinkle-serum/80025863.html'>
                            <button className='proof'>
                                <span>See for yourself</span>
                            </button>
                        </a>
                        </div>

                    </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Review
