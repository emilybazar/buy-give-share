// AUTHOR:  Emily Bazar
// PROGRAM: AboutPage.js
// DATE:    24 August 2024
// PURPOSE: This component renders the "About Us" page for the Buy Give Share website.
//          It includes sections for the mission statement, value statements, and a
//          "Meet Our Team" section featuring details about the team members.
// INPUT:   n/a
// PROCESS: Uses React to build the layout and styling.
// OUTPUT:  The rendered output is an "About Us" page that can be displayed within the Buy Give Share React app.

import React from 'react';
import './AboutPage.css';
import MissionStatement from './MissionStatement';
import ValueStatements from './ValueStatements';
import MeetOurTeam from './MeetOurTeam';

const AboutPage = () => {
    return (
        <div className="about-page">
            <h1>About Us</h1>
            <MissionStatement />
            <ValueStatements />
            <MeetOurTeam />
        </div>
    );
};

export default AboutPage;
