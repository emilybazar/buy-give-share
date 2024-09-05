// AUTHOR:  Emily Bazar
// PROGRAM: JoinUsPage.js
// DATE:    5 September 2024
// PURPOSE: Renders the "Join Us" page for Buy Give Share. Provides information on joining as a business or charity and includes call-to-action buttons for signup.
// INPUT:   N/A
// PROCESS: Displays information about the benefits of joining the platform for businesses and charities, with links to signup pages.
// OUTPUT:  "Join Us" page with sections for businesses, charities, and a call-to-action.

import React from 'react';
import './JoinUsPage.css';

const JoinUs = () => {
    return (
        <div className="join-us-page">
            <section className="join-intro">
                <h1>Join Us</h1>
                <p>Be part of a platform that makes giving back easier and more transparent. Whether you're a business looking to grow through giving or a charity seeking more impactful connections, Buy Give Share is here to help.</p>
            </section>

            <section className="join-options">
                <div className="join-business">
                    <h2>For Businesses</h2>
                    <p>Increase visibility, promote verified donations, and build strong relationships with charities through Buy Give Share.</p>
                    <a href="/business-signup" className="cta-button">Join as a Business</a>
                </div>
                <div className="join-charity">
                    <h2>For Charities</h2>
                    <p>Connect with businesses, simplify your donation process, and ensure transparency with our platform.</p>
                    <a href="/charity-signup" className="cta-button">Join as a Charity</a>
                </div>
            </section>

            <section className="how-it-works">
                <h2>How It Works</h2>
                <div className="steps">
                    <div className="step">
                        <h3>Step 1</h3>
                        <p>Create your profile</p>
                    </div>
                    <div className="step">
                        <h3>Step 2</h3>
                        <p>Select a charity/business to partner with</p>
                    </div>
                    <div className="step">
                        <h3>Step 3</h3>
                        <p>Track and verify donations</p>
                    </div>
                    <div className="step">
                        <h3>Step 4</h3>
                        <p>Share your impact</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JoinUs;
