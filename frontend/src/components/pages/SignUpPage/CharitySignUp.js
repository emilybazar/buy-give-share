// AUTHOR: Emily Bazar
// PROGRAM: CharitySignUp.js
// DATE: 5 September 2024
// PURPOSE: This component renders the charity signup form, allowing charities to create an account and join the platform.
// INPUT: Charity information including name, email, password, and confirm password.
// PROCESS: Handles form data input, checks if passwords match, and submits the form data.
// OUTPUT: A form for charity signup with validation and submission functionality.

import React, { useState } from 'react';
import './CharitySignUp.css';

const CharitySignUp = () => {
    const [formData, setFormData] = useState({
        charityName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        // add logic
        console.log('Form submitted:', formData);
    };

    return (
        <div className="signup-page">
            <div className="signup-intro">
                <h1>Create a Charity Account</h1>
                <p>Sign up to connect with businesses and manage your donations on our platform.</p>
            </div>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="cta-button">Sign Up</button>
            </form>
            <p className="login-redirect">
                Already have an account? <a href="/login">Log In</a>
            </p>
        </div>
    );
};

export default CharitySignUp;
