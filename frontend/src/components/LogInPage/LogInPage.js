// AUTHOR:  Emily Bazar
// PROGRAM: LogInPage.js
// DATE:    9 September 2024
// PURPOSE: This component renders the login page for the Buy Give Share website. It allows users to log in using their email and password.
// INPUT:   User email and password.
// PROCESS: Captures the input and handles form submission. Validates the input and triggers the login function.
// OUTPUT:  A login form with input fields for email and password, and a submit button.

import React, { useState } from 'react';
import './LogInPage.css';

const LogInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Need to add login logic
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Log In</button>
            </form>
            <p className="join-us-link">
                Don’t have an account? <a href="/joinus">Join Us</a>
            </p>
        </div>
    );
};

export default LogInPage;
