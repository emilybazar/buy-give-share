// AUTHOR: Emily Bazar
// PROGRAM: FoundingPartners.js
// DATE: 24 August 2024
// PURPOSE: This component renders the Founding Members section of the landing page with a centered title and founding member logos.
// INPUT: N/A
// PROCESS: Uses React to build the layout and styling.
// OUTPUT: Renders the Founding Members section with a title and partner logos.

import React from 'react';
import './FoundingPartners.css';
import MadeInWashingtonLogo from '../assets/logos/MadeInWashingtonLogo.png';
import BirthdayDreamsLogo from '../assets/logos/BirthdayDreamsLogo.png';
import PugetSoundkeeperLogo from '../assets/logos/PugetSoundkeeperLogo.png';
import SR3Logo from '../assets/logos/SR3Logo.png';

function FoundingPartners() {
    return (
        <section className="founding-partners">
            <h2>Our Founding Partners</h2>
            <div className="founding-partners-logos-container">
                <div className="founding-partners-box"></div>
                <div className="founding-partners-logos">
                    <img src={MadeInWashingtonLogo} alt="Made In Washington Logo"
                         className="founding-partners-logo madeinwashington"/>
                    <img src={BirthdayDreamsLogo} alt="Birthday Dreams Logo"
                         className="founding-partners-logo birthdaydreams"/>
                    <img src={PugetSoundkeeperLogo} alt="Puget Soundkeeper Logo"
                         className="founding-partners-logo pugetsoundkeeper"/>
                    <img src={SR3Logo} alt="SR3 Logo" className="founding-partners-logo sr3"/>
                </div>
            </div>
        </section>
    );
}

export default FoundingPartners;
