// AUTHOR: Emily Bazar
// PROGRAM: App.js
// DATE:    24 August 2024
// PURPOSE: Main component that includes routing for the LandingPage and AboutPage components.
// INPUT:   N/A
// PROCESS: Renders the LandingPage component by default and navigates to AboutPage when the "About" link is clicked.
// OUTPUT:  Displays either the landing page or the about page based on the route.

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage/LandingPage';
import AboutPage from "./components/pages/AboutPage/AboutPage";
import Header from "./components/pages/General/Header";
import ContactPage from "./components/pages/ContactPage/ContactPage";
import LogInPage from "./components/pages/LogInPage/LogInPage";
import JoinUsPage from "./components/pages/JoinUsPage/JoinUsPage";
import BusinessSignUp from "./components/pages/SignUpPage/BusinessSignUp";
import CharitySignUp from "./components/pages/SignUpPage/CharitySignUp";
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/login" element={<LogInPage />} />
                    <Route path="/joinus" element={<JoinUsPage />} />
                    <Route path="/business-signup" element={<BusinessSignUp />} />
                    <Route path="/charity-signup" element={<CharitySignUp />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
