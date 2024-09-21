/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './feedback.css';

const Feedback = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, message });
        setSubmitted(true); 
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="feedback-container">
            <h2>Feedback</h2>
            {submitted ? (
                <p>Thank you for your feedback!</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Submit Feedback</button>
                </form>
            )}
        </div>
    );
};

export default Feedback;
