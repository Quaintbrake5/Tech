/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

// Sample data
const tripData = [
    {
        id: 1,
        location: "Paris, France",
        popularity: 9.5,
        imageUrl: "https://example.com/images/paris.jpg",
        famousActivities: [
            "Visit the Eiffel Tower",
            "Explore the Louvre Museum",
            "Cruise along the Seine River",
            "Enjoy a coffee at a Parisian café",
            "Discover Montmartre and Sacré-Cœur"
        ],
        bestTransportation: "Metro"
    },
    {
        id: 2,
        location: "Bali, Indonesia",
        popularity: 9.0,
        imageUrl: "https://example.com/images/bali.jpg",
        famousActivities: [
            "Relax on Kuta Beach",
            "Visit the Ubud Monkey Forest",
            "Explore the rice terraces",
            "Take a cooking class",
            "Enjoy a traditional Balinese dance performance"
        ],
        bestTransportation: "Scooter"
    },
    {
        id: 3,
        location: "Tokyo, Japan",
        popularity: 9.3,
        imageUrl: "https://example.com/images/tokyo.jpg",
        famousActivities: [
            "Experience Shibuya Crossing",
            "Visit Senso-ji Temple",
            "Enjoy sushi at Tsukiji Market",
            "Explore Akihabara for electronics and anime",
            "Relax in Ueno Park"
        ],
        bestTransportation: "Train"
    },
    {
        id: 4,
        location: "New York City, USA",
        popularity: 9.4,
        imageUrl: "https://example.com/images/nyc.jpg",
        famousActivities: [
            "Visit the Statue of Liberty",
            "Explore Central Park",
            "See a Broadway show",
            "Walk across the Brooklyn Bridge",
            "Visit the Metropolitan Museum of Art"
        ],
        bestTransportation: "Subway"
    },
    {
        id: 5,
        location: "Rome, Italy",
        popularity: 9.2,
        imageUrl: "https://example.com/images/rome.jpg",
        famousActivities: [
            "Explore the Colosseum",
            "Visit the Vatican and St. Peter's Basilica",
            "Toss a coin in the Trevi Fountain",
            "Enjoy authentic Italian pizza",
            "Stroll through the historic streets of Trastevere"
        ],
        bestTransportation: "Walking"
    },
    {
        id: 6,
        location: "Cape Town, South Africa",
        popularity: 8.7,
        imageUrl: "https://example.com/images/capetown.jpg",
        famousActivities: [
            "Visit Table Mountain",
            "Explore the Cape of Good Hope",
            "Tour the Robben Island Museum",
            "Relax at Camps Bay Beach",
            "Visit the V&A Waterfront"
        ],
        bestTransportation: "Car rental"
    },
    {
        id: 7,
        location: "Sydney, Australia",
        popularity: 8.9,
        imageUrl: "https://example.com/images/sydney.jpg",
        famousActivities: [
            "See the Sydney Opera House",
            "Walk across the Sydney Harbour Bridge",
            "Relax at Bondi Beach",
            "Explore the Royal Botanic Garden",
            "Visit Taronga Zoo"
        ],
        bestTransportation: "Ferry"
    },
    {
        id: 8,
        location: "Machu Picchu, Peru",
        popularity: 9.1,
        imageUrl: "https://example.com/images/machu_picchu.jpg",
        famousActivities: [
            "Hike the Inca Trail",
            "Explore the ruins of Machu Picchu",
            "Visit the Sacred Valley",
            "Experience local culture in Cusco",
            "Try traditional Peruvian cuisine"
        ],
        bestTransportation: "Train"
    }
];

const TripCard = ({ trip }) => (
    <div className="card">
        <img src={trip.imageUrl} alt={trip.location} />
        <div className="card-content">
            <h2>{trip.location}</h2>
            <p className="popularity">Popularity: {trip.popularity}</p>
            <div className="activities">
                <h3>Famous Activities:</h3>
                <ul>
                    {trip.famousActivities.map((activity, index) => (
                        <li key={index}>{activity}</li>
                    ))}
                </ul>
            </div>
            <p className="transport">Best Transportation: {trip.bestTransportation}</p>
        </div>
    </div>
);

const TripCatalogue = () => {
    return (
        <div className="catalogue">
            <h1>Travel Trip Catalogue</h1>
            {tripData.map(trip => (
                <TripCard key={trip.id} trip={trip} />
            ))}
        </div>
    );
};

export default TripCatalogue;
