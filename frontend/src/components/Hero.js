// AUTHOR: Emily Bazar
// PROGRAM: Hero.js
// DATE:    24 August 2024
// PURPOSE: This component renders the Hero section of the landing page with a title, paragraphs, buttons on the left, and a YouTube video on the right.
// INPUT:   No external inputs.
// PROCESS: Uses React to build the layout and styling.
// OUTPUT:  Renders the Hero section with a title, paragraphs, buttons, and a video.

import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-left">
                    <h1>DONATIONS MADE TRANSPARENT</h1>
                    <p>Buy Give Share seamlessly connects businesses and charities through collaborative promotions.</p>
                    <p>Our POS-integrated system ensures donations are automatically tracked and verified, giving
                        charities peace of mind and businesses added transparency.</p>
                    <p> What truly sets us apart is how we create shareable impact videos that drive traffic and engagement, amplifying the reach of both charities and businesses.</p>
                    <p>Join us in creating powerful community change today!</p>
                    <div className="hero-buttons">
                        <button className="btn-primary">Join as a Business</button>
                        <button className="btn-secondary">Join as a Charity</button>
                    </div>
                </div>
                <div className="hero-right">
                    <iframe
                        className="hero-video"
                        src="https://www.youtube.com/embed/dCgwkSftJ70"
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

export default Hero;
