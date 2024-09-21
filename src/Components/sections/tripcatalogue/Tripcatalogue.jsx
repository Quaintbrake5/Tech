/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Navigation from '/Users/DELL/Tech/src/Components/nav/Navigation'; // Adjust import as needed
import tripData from '/Users/DELL/Tech/src/JSON/tripData.json'; // Adjust path accordingly
import './Tripcatalogue.css'

const TripCatalogue = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const filteredTrips = tripData.filter(trip => {
        const lowerCaseTerm = searchTerm.toLowerCase();
        return (
            trip.continent.toLowerCase().includes(lowerCaseTerm) ||
            trip.bestTransportation.toLowerCase().includes(lowerCaseTerm) ||
            trip.famousActivities.some(activity => activity.toLowerCase().includes(lowerCaseTerm))
        );
    });

    return (
        <div>
            <Navigation onSearch={handleSearch} />
            <h1>Trip Catalogue</h1>
            <div className="catalogue">
                {filteredTrips.map(trip => (
                    <div key={trip.id} className="card">
                        <img src={trip.imageUrl} alt={trip.location} />
                        <div className="card-content">
                            <h2>{trip.location}</h2>
                            <p>Continent: {trip.continent}</p>
                            <p>Popularity: {trip.popularity}</p>
                            <p>Best Transportation: {trip.bestTransportation}</p>
                            <div className="activities">
                                <h3>Famous Activities:</h3>
                                <ul>
                                    {trip.famousActivities.map(activity => (
                                        <li key={activity}>{activity}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TripCatalogue;
