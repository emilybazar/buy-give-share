// AUTHOR: Emily Bazar
// PROGRAM: Header.js
// DATE: 24 August 2024
// PURPOSE: Renders the header of the landing page, including a logo, navigation links, and a hamburger menu for mobile devices.
// INPUT: N/A
// PROCESS: Displays the logo and navigation links. Toggles the visibility of navigation links on smaller screens using a hamburger menu.
// OUTPUT: Header component with a logo, navigation links, and a responsive hamburger menu.

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logos/BGSLogo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Buy Give Share Logo" />
            </div>
            <nav className={`navigation ${isOpen ? 'open' : ''}`}>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Log In</Link>
                <Link to="/joinus">Join Us</Link>
            </nav>
            <div className="hamburger" onClick={toggleMenu}>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            </div>
        </header>
    );
};

export default Header;
