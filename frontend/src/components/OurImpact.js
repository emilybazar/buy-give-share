// AUTHOR: Emily Bazar
// PROGRAM: OurImpact.js
// DATE: 24 August 2024
// PURPOSE: This component renders the Our Impact section of the landing page with a YouTube video on the left and text on the right.
// INPUT: N/A
// PROCESS: Uses React to build the layout and styling for the Our Impact section.
// OUTPUT: Renders the Our Impact section with a YouTube video and accompanying text.

import React from 'react';
import './OurImpact.css';

function OurImpact() {
    return (
        <section className="our-impact">
            <div className="impact-content">
                <div className="impact-video">
                    <iframe
                        src="https://www.youtube.com/embed/xbMriu9lUbQ"
                        title="Impact Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="impact-text">
                    <h2>OUR IMPACT</h2>
                    <p>
                        Discover how your involvement can make a difference.<br/>
                        Watch this impact video from Made in Washington to see the positive change you can help create.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default OurImpact;
