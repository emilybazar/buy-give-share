// AUTHOR: Emily Bazar
// PROGRAM: LoginPage.js
// DATE: 5 September 2024
// PURPOSE: This component renders the login form for users to access their accounts.
// INPUT: Email and password fields for logging in.
// PROCESS: Handles form data input and submission.
// OUTPUT: A login form with validation and submission functionality.

import React, { useState } from 'react';
import './LogInPage.css';

const LogInPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
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
        // Submit form logic
        console.log('Form submitted:', formData);
    };

    return (
        <div className="login-container">
            <h2>Log In</h2>
            <form onSubmit={handleSubmit} className="login-form">
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
                <button type="submit" className="login-button">Log In</button>
            </form>
            <div className="join-us-link">
                <p>Don't have an account? <a href="/business-signup">Join Us</a></p>
            </div>
        </div>
    );
};

export default LogInPage;
