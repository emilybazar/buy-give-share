// AUTHOR: Emily Bazar
// PROGRAM: HowItWorks.js
// DATE:    24 August 2024
// PURPOSE: This component renders the How It Works section of the landing page, including a centered How It Works section and side-by-side sections for businesses and charities.
// INPUT:   No external inputs.
// PROCESS: Uses React to build the layout and styling for the How It Works section.
// OUTPUT:  Renders the How It Works section with details for businesses and charities.

import React from 'react';
import './HowItWorks.css';

// Import individual images
import PersonAddClipArt from '../../assets/clipart/PersonAddClipArt.png';
import HeartCheckClipArt from '../../assets/clipart/HeartCheckClipArt.png';
import HandshakeClipArt from '../../assets/clipart/HandshakeClipArt.png';
import EditNoteClipArt from '../../assets/clipart/EditNoteClipArt.png';
import ListCheckedClipArt from '../../assets/clipart/ListCheckedClipArt.png';
import SendClipArt from '../../assets/clipart/SendClipArt.png';
import DonationClipArt from '../../assets/clipart/DonationClipArt.png';
import VideoClipArt from '../../assets/clipart/VideoClipArt.png';

function HowItWorks() {
    return (
        <section className="how-it-works">
            <div className="how-it-works-content">
                {/* How It Works Section */}
                <div className="how-it-works-info-container">
                    <div className="how-it-works-info-content">
                        <h2>HOW IT WORKS</h2>
                        <p>At Buy Give Share, we handle the heavy lifting.</p>
                        <p>Our platform makes it easy for charities and businesses to connect and manage donations in real-time.</p>
                    </div>
                </div>


                <div className="businesses-charities-container">
                    {/* For Businesses Section */}
                    <div className="section for-businesses">
                        <div className="section-title">
                            <h2>For Businesses</h2>
                        </div>
                        <ul>
                            <li><img src={PersonAddClipArt} alt="Clipart 1"/> 1. Sign Up</li>
                            <li><img src={HeartCheckClipArt} alt="Clipart 2"/> 2. Choose a Charity</li>
                            <li><img src={HandshakeClipArt} alt="Clipart 3"/> 3. Agree on Promotion</li>
                            <li><img src={EditNoteClipArt} alt="Clipart 4"/> 4. Track Donations Automatically</li>
                            <li><img src={ListCheckedClipArt} alt="Clipart 5"/> 5. Promotion Ends</li>
                            <li><img src={SendClipArt} alt="Clipart 6"/> 6. Impact Video Sent</li>
                        </ul>
                    </div>

                    {/* For Charities Section */}
                    <div className="section for-charities">
                        <div className="section-title">
                            <h2>For Charities</h2>
                        </div>
                        <ul>
                            <li><img src={HeartCheckClipArt} alt="Clipart 6"/> 1. Sign Up</li>
                            <li><img src={HandshakeClipArt} alt="Clipart 7"/> 2. Approve Promotion</li>
                            <li><img src={ListCheckedClipArt} alt="Clipart 8"/> 3. Promotion Ends</li>
                            <li><img src={VideoClipArt} alt="Clipart 9"/> 4. Record Short "Thank You!" Clip</li>
                            <li><img src={SendClipArt} alt="Clipart 10"/> 5. Impact Video Sent</li>
                            <li><img src={DonationClipArt} alt="Clipart 11"/> 6. Receive Support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
