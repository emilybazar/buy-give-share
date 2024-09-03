// AUTHOR:  Emily Bazar
// PROGRAM: ValueStatements.js
// DATE:    3 September 2024
// PURPOSE: This component renders the "Value Statements" section of the "About Us" page for the Buy Give Share website.
//          It outlines the core values and beliefs of the company.
// INPUT:   n/a
// PROCESS: Uses React to build the layout and styling for the value statements section.
// OUTPUT:  The rendered output is a section that displays the company's core values within the "About Us" page.

import React from 'react';
import './ValueStatements.css';

const ValueStatements = () => {
    return (
        <div className="value-statements about-box">
            <h2>Value Statements</h2>
            <p>
                We believe that ALL people want to positively give back to society but can be sometimes
                limited by external factors.
            </p>
            <p>
                We believe that more transparency to donations will lead to more people wanting to donate
                because they appreciate the honesty of knowing where the money is going.
            </p>
            <p>We believe that there exists a business model that will bring optimal value to all parties.</p>
        </div>
    );
};

export default ValueStatements;
