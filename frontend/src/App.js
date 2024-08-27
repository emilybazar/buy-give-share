// AUTHOR: Emily Bazar
// PROGRAM: App.js
// DATE:    24 August 2024
// PURPOSE: Main component that includes routing for the LandingPage and AboutPage components.
// INPUT:   N/A
// PROCESS: Renders the LandingPage component by default and navigates to AboutPage when the "About" link is clicked.
// OUTPUT:  Displays either the landing page or the about page based on the route.

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AboutPage from "./components/AboutPage";
import Header from "./components/Header";
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
