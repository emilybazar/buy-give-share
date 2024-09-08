// AUTHOR: Emily Bazar
// PROGRAM: BasicSignUp.js
// DATE: 9 September 2024
// PURPOSE: This component renders the basic signup form with email and password, allowing businesses to create an initial account.
// INPUT: Email and password fields for account creation.
// OUTPUT: Basic signup form for businesses.

import React, { useState } from 'react';
import './BusinessSignUp.css';

const BasicSignUp = () => {
    const [formData, setFormData] = useState({
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
        // Submit form logic
        console.log('Form submitted:', formData);
    };

    return (
        <div className="signup-page">
            <div className="signup-intro">
                <h1>Create a Business Account</h1>
                <p>Sign up with your email and password to get started.</p>
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

export default BasicSignUp;
