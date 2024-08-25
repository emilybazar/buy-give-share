// AUTHOR: Emily Bazar
// PROGRAM: LandingPage.js
// DATE:    24 August 2024
// PURPOSE: This component renders the landing page.
// INPUT:   No external inputs.
// PROCESS: Uses React to build the layout and styling.
// OUTPUT:  Renders the landing page with Header.

import React from 'react';
import './LandingPage.css';
import Header from "./Header";

function LandingPage() {
    return (
        <div className="landing-page">
            <Header/>
        </div>
    );
}

export default LandingPage;
