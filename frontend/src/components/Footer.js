// AUTHOR: Emily Bazar
// PROGRAM: Footer.js
// DATE:    24 August 2024
// PURPOSE: This component renders the Footer section with social media links, including a Facebook logo that directs to the Facebook page.
// INPUT: N/A
// PROCESS: Displays social media logos and wraps them with anchor tags to link to corresponding social media pages.
// OUTPUT: Footer component with social media links.

import React from 'react';
import './Footer.css';
import FacebookLogo from '../assets/logos/FacebookLogo.png'; // Replace with your actual path to the logo

function Footer() {
    return (
        <footer className="footer">
            <div className="social-media">
                <a href="https://www.facebook.com/BuyGiveShare/" target="_blank" rel="noopener noreferrer">
                    <img src={FacebookLogo} alt="Facebook Logo" className="social-media-logo" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
