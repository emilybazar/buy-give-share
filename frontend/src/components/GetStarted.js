// AUTHOR: Emily Bazar
// PROGRAM: GetStarted.js
// DATE:    24 August 2024
// PURPOSE: This component renders the Get Started section of the landing page with a gradient background, a title, and a call-to-action button.
// INPUT:   N/A
// PROCESS: Uses React to build the layout and styling for the Get Started section.
// OUTPUT:  Renders the Get Started section with a title and a button.

import React from 'react';
import './GetStarted.css';

function GetStarted() {
    return (
        <section className="get-started">
            <div className="get-started-content">
                <h2>Join Our Waitlist</h2>
                <button className="get-started-button">Get Started</button>
            </div>
        </section>
    );
}

export default GetStarted;
