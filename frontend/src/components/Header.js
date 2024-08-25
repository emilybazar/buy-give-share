// AUTHOR: Emily Bazar
// PROGRAM: Header.js
// DATE: 24 August 2024
// PURPOSE: Renders the header of the landing page, including navigation links.
// INPUT: N/A
// PROCESS: Displays logo image and navigation links.
// OUTPUT: Header component with logo and navigation links.

import React from 'react';
import './Header.css';
import logo from '../assets/logos/BGSLogo.png';


const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Buy Give Share Logo" />
            </div>
            <nav className="navigation">
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#login">Log In</a>
                <a href="#joinus">Join Us</a>
            </nav>
        </header>
    );
};

export default Header;
