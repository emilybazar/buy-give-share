// AUTHOR: Emily Bazar
// PROGRAM: Platform.js
// DATE:    24 August 2024
// PURPOSE: This component renders the Platform section of the landing page with a centered title and platform logos.
// INPUT:   N/A
// PROCESS: Uses React to build the layout and styling.
// OUTPUT:  Renders the Platform section with a title and platform logos.

import React from 'react';
import './Platform.css';
import CloverLogo from '../assets/CloverLogo.png';
import SquareLogo from '../assets/SquareLogo.png';

function Platform() {
    return (
        <section className="platform">
            <div className="platform-box"></div>
            <h2>Coming to Platforms</h2>
            <div className="platform-logos">
                <img src={CloverLogo} alt="Clover Logo" className="platform-logo clover"/>
                <img src={SquareLogo} alt="Square Logo" className="platform-logo square"/>
            </div>
        </section>
    );
}

export default Platform;
