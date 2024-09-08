// AUTHOR:  Emily Bazar
// PROGRAM: MissionStatement.js
// DATE:    9 September 2024
// PURPOSE: This component renders the "Mission Statement" section of the "About Us" page for the Buy Give Share website.
//          It includes a brief description of the company's mission.
// INPUT:   n/a
// PROCESS: Uses React to build the layout and styling for the mission statement section.
// OUTPUT:  The rendered output is a section that displays the mission statement within the "About Us" page.

import React from 'react';
import './MissionStatement.css';

const MissionStatement = () => {
    return (
        <div className="mission-statement about-box">
            <h2>Our Mission</h2>
            <p>
                To positively impact the world by bringing more transparency to donations
                to non-profit organizations using innovative business strategies and modern technology.
            </p>
        </div>
    );
};

export default MissionStatement;
