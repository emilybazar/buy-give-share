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
                    <p>Effortlessly connect with charities, streamline donation tracking with POS system integration,
                        and enjoy free marketing through impactful videos, all on our platform.</p>
                    <a href="/business-signup" className="cta-button">Join as a Business</a>
                </div>
                <div className="join-charity">
                    <h2>For Charities</h2>
                    <p>Partner with businesses, simplify donation management, and ensure transparency between all
                        parties with our platform.</p>
                    <a href="/charity-signup" className="cta-button">Join as a Charity</a>
                </div>
            </section>


            <section className="how-it-works">
                <h2>How It Works</h2>
                <div className="steps">
                    <div className="step">
                        <h3>Step 1</h3>
                        <p>Create your profile and get started</p>
                    </div>
                    <div className="step">
                        <h3>Step 2</h3>
                        <p>Search the directory, message businesses or charities, and agree on a promotion</p>
                    </div>
                    <div className="step">
                        <h3>Step 3</h3>
                        <p>Track donations using our platform's dashboard and detailed stats</p>
                    </div>
                    <div className="step">
                        <h3>Step 4</h3>
                        <p>At the end of the promotion, we'll create and send your impact video</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default JoinUs;
