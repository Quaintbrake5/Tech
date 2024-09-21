/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Feedback from '../tourreview/feedback/Feedback';
import './Tourreview.css';

function Tourreview() {
  const [showFeedback, setShowFeedback] = useState(false);

  const toggleFeedback = () => {
    setShowFeedback(!showFeedback);
  };

  return (
    <>
      <section className="testimonial-section">
        <h1 className='testimonial-header'>
          Here’s what some people who've used our services have said:
        </h1>

        <div className="testimonial">
          <div className="profile">
            <img src='/src/assets/Emily.jpeg' alt="Emily" />
          </div>

          <br />
          <h3 className="testimonial-name">Emily Johnson, Adventure Seeker</h3>
          <p className="testimonial-text">
            "TravelSmart transformed my travel experience! Last summer, I decided to explore the breathtaking landscapes of Bali, and I couldn’t have done it without their incredible services. From the moment I booked my trip, the TravelSmart team was attentive and supportive, providing me with personalized recommendations tailored to my interests."
          </p>
          <p className="testimonial-text">
            What truly stood out was the customer service. When my flight was delayed, the team quickly rebooked my transfers without any hassle. It made a potentially stressful situation feel effortless. I came home with unforgettable memories and a heart full of gratitude. I highly recommend TravelSmart to anyone looking to elevate their travel adventures!"
          </p>
        </div>

        <div className="testimonial">
          <div className="profile">
            <img src='/src/assets/Mark.jpeg' alt="Mark" />
          </div>

          <br />
          <h3 className="testimonial-name">Mark Thompson, Nature Lover</h3>
          <p className="testimonial-text">
            "Using TravelSmart was a game changer for my recent trip to Machu Picchu. The personalized itinerary allowed me to explore both popular sights and off-the-beaten-path locations. I loved every moment!"
          </p>
        </div>

        <button onClick={toggleFeedback} className="feedback-toggle">
          {showFeedback ? 'Hide Feedback Form' : 'Give Feedback'}
        </button>

        {showFeedback && <Feedback />} {/* Conditionally render the Feedback component */}
      </section>
    </>
  );
}

export default Tourreview;
