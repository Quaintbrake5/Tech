/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../nav/Navigation.css";

const Header = ({ onSearch }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <>
            <section className='header-section'>
                <div className='header'>
                    <div className='header-content'>
                        <ul className={`list ${isOpen ? 'active' : ''}`}>
                            <li className='header-logo-wrapper'>
                                <Link to='/'>
                                    <img className='tsmart' alt='Logo' src='/src/assets/Logo.jpg' />
                                </Link>
                            </li>
                            <li className='search-box'>
                                <form className='search-form' role='search' action=''>
                                    <input
                                        id='search'
                                        type='search'
                                        className='search-query'
                                        aria-label='Search'
                                        autoComplete='off'
                                        placeholder='Search...'
                                        value={searchTerm}
                                        onChange={handleSearch}
                                    />
                                    <button type='button' className='search-button' aria-label='Search'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 17C6.141 17 3 13.859 3 10C3 6.141 6.141 3 10 3C13.859 3 17 6.141 17 10C17 13.859 13.859 17 10 17ZM21.854 21.146L15.993 15.286C17.238 13.876 18 12.029 18 10C18 5.582 14.418 2 10 2C5.582 2 2 5.582 2 10C2 14.418 5.582 18 10 18C12.029 18 13.876 17.238 15.286 15.993L21.146 21.854C21.244 21.951 21.372 22 21.5 22C21.628 22 21.756 21.951 21.854 21.854C22.049 21.658 22.049 21.342 21.854 21.146Z" fill="#333" />
                                        </svg>
                                    </button>
                                </form>
                            </li>
                            <div className='right'>
                                <li><Link to='/about'>About Us</Link></li>
                                <li><Link to='/contact'>Contact Us</Link></li>
                                <li><Link to='/tripcatalogue'>Trip Catalogue</Link></li>
                                <li><Link to='/tourreview'>Tour Review</Link></li>
                            </div>
                        </ul>
                        <div className='hamburger' onClick={handleToggle}>
                            <div className={`hamburger-icon ${isOpen ? 'active' : ''}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div className='hidden-menu'>
                        <ul className='hidden-list'>
                            <li><Link to='/about' onClick={handleClose}>About Us</Link></li>
                            <li><Link to='/contact' onClick={handleClose}>Contact Us</Link></li>
                            <li><Link to='/tripcatalogue' onClick={handleClose}>Trip Catalogue</Link></li>
                            <li><Link to='/tourreview' onClick={handleClose}>Tour Review</Link></li>
                        </ul>
                    </div>
                )}
            </section>
        </>
    );
};

export default Header;
