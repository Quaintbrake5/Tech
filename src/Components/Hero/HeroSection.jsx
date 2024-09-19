/* eslint-disable no-unused-vars */
import React from 'react'
import './hero.css'

const HeroSection = () => {
  return (
    <>
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Explore the World</h1>
          <p className="hero-subtitle">Discover beautiful destinations, cultures, and experiences.</p>
          <a href="#learn-more" className="hero-btn">Learn More</a>
        </div>
      </div>
    </section>
    </>
  )
}

export default HeroSection
