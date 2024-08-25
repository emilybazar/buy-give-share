// AUTHOR: Emily Bazar
// PROGRAM: Footer.js
// DATE:    24 August 2024
// PURPOSE: This component renders the footer section of the landing page, including social media icons and basic footer content.
// INPUT:  N/A
// PROCESS: Uses React to build the layout and styling for the footer section.
// OUTPUT:  Renders the footer with social media icons and text.

import React from 'react';
import './Footer.css';
import FacebookLogo from '../assets/socialmedia/FacebookLogo.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-media">
                    <a href="https://www.facebook.com">
                        <img src={FacebookLogo} alt="Facebook Logo" className="social-media-logo" />
                    </a>
                </div>
                <div className="footer-text">
                    <p>&copy; 2024 Buy Give Share. All rights reserved.</p>
                    <p><a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
