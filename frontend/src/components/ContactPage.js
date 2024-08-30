// AUTHOR: Emily Bazar
// PROGRAM: ContactPage.js
// DATE:    29 August 2024
// PURPOSE: This component renders the "Contact Us" page for the Buy Give Share website.
//          It includes a form for users to reach out with any inquiries or feedback.
// INPUT:   User input through the form fields.
// PROCESS: Collects form data and prepares it for submission (future enhancement).
// OUTPUT:  The rendered output is a "Contact Us" page that can be displayed within the Buy Give Share React app.

import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Implement backend services for handling submissions
    };

    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
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
                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <button type="submit" className="submit-button">Send Message</button>
            </form>
        </div>
    );
};

export default ContactPage;
