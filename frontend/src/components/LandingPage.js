// AUTHOR: Emily Bazar
// PROGRAM: LandingPage.js
// DATE:    24 August 2024
// PURPOSE: This component renders the landing page.
// INPUT:   No external inputs.
// PROCESS: Uses React to build the layout and styling.
// OUTPUT:  Renders the landing page with the sections: Header, Hero, Platform, OurImpact, GetStarted, and Footer.

import React from 'react';
import './LandingPage.css';
import Header from "./Header";
import Hero from "./Hero";
import Platform from "./Platform";
import HowItWorks from "./HowItWorks";
import OurImpact from "./OurImpact";
import GetStarted from "./GetStarted";

function LandingPage() {
    return (
        <div className="landing-page">
            <Header/>
            <Hero />
            <Platform />
            <HowItWorks />
            <OurImpact />
            <GetStarted />
        </div>
    );
}

export default LandingPage;
