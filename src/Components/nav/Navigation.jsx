/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import "../nav/Navigation.css"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
      setIsSidePanelOpen(!isSidePanelOpen);
    };
  return (
    <>
        <section className='header-section'>
          <div className='header'>
            <div className='header-content'>
              <ul className='list'>
                {/* Hamburger button */}
                {/* <li>
                  <div className='hamburger' tabIndex= '-1'>
                    <div className='header-menu-burger-icon'>
                      <button className='hamburger-menu' onClick={handleToggle} title='Menu'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" tabIndex="-1">
                          <title>Menu</title>
                          <path fillRule="evenodd" clipRule="evenodd" d="M20 19C20.276 19 20.5 19.224 20.5 19.5C20.5 19.7453 20.323 19.9496 20.0898 19.9919L20 20H4C3.724 20 3.5 19.776 3.5 19.5C3.5 19.2547 3.67699 19.0504 3.91016 19.0081L4 19H20ZM20 11.5C20.276 11.5 20.5 11.724 20.5 12C20.5 12.2453 20.323 12.4496 20.0898 12.4919L20 12.5H4C3.724 12.5 3.5 12.276 3.5 12C3.5 11.7547 3.67699 11.5504 3.91016 11.5081L4 11.5H20ZM20 4C20.276 4 20.5 4.224 20.5 4.5C20.5 4.74533 20.323 4.94958 20.0898 4.99194L20 5H4C3.724 5 3.5 4.776 3.5 4.5C3.5 4.25467 3.67699 4.05042 3.91016 4.00806L4 4H20Z" fill="#333333"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </li> */}

                {/* Logo */}
                <li>
                  <div className='header-logo-wrapper'>
                    <div className='header-logo'>
                      <a className='logo' href='/'>
                        <img alt='Logo' src= '/src/assets/Logo.png'></img>
                      </a>
                    </div>
                  </div>
                </li>

                {/* Search Box */}
                <li>
                  <div className='search-box'>
                    <form className='search-form' role='search' action=''>
                        <input id='search' type='search' className='search-query' aria-label='Search'  role='button' autoComplete='off' placeholder='Search...'></input>
                        <button type='button' className='search-button' aria-label='Search' role='button'>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <title>Search</title>
                            <path fillRule="evenodd" clipRule="evenodd" d="M10 17C6.141 17 3 13.859 3 10C3 6.141 6.141 3 10 3C13.859 3 17 6.141 17 10C17 13.859 13.859 17 10 17ZM21.854 21.146L15.993 15.286C17.238 13.876 18 12.029 18 10C18 5.582 14.418 2 10 2C5.582 2 2 5.582 2 10C2 14.418 5.582 18 10 18C12.029 18 13.876 17.238 15.286 15.993L21.146 21.854C21.244 21.951 21.372 22 21.5 22C21.628 22 21.756 21.951 21.854 21.854C22.049 21.658 22.049 21.342 21.854 21.146Z" fill="#333333"></path>
                          </svg>
                        </button>
                    </form>
                  </div>
                </li>

                <div className='right'>

                {/* About Us */}
                <li>
                  <div className='header-about-us'>
                    <div className='about'>
                      <a href='#' title='About Us'>

                        <div className='about-text'>About Us</div>
                      </a>
                    </div>
                  </div>
                </li>
                  
                {/* Contact Us */}
                <li>
                  <div className='header-contact-us'>
                    <div className='contact'>
                      <a href='#' title='Contact Us'>

                        <div className='contact-text'>Contact Us</div>
                      </a>
                    </div>
                  </div>
                </li>

                {/* Log In */}
                <li>
                  <div className='header-login'>
                    <div className='login' role='menu'>
                      <a href='#' role='menuitem' title='Tour Review'>

                        <div className='login-text'>Trip Catalogue</div>
                      </a>
                    </div>
                  </div>
                </li>

                {/* Bag */}
                <li>
                  <div className='header-mini-bag' role='menu'>
                  <a href='#' role='menuitem' className='minibag' aria-controls='minibag-flyout-items' title='Tour Review'>

                    <div className='minibag-text'>Tour Review </div>
                  </a>
                  </div>
                </li>
                </div>

              </ul>
            </div>
          </div>
        </section>
    </>
  )
}

export default Header
