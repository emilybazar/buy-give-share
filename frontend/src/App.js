// AUTHOR: Emily Bazar
// PROGRAM: App.js
// DATE:    24 August 2024
// PURPOSE: Main component that includes the landing page.
// INPUT:   No external inputs.
// PROCESS: Renders the LandingPage component. More components to be added.
// OUTPUT:  Displays the landing page in the app.

import React from 'react';
import LandingPage from './components/LandingPage';
import './App.css';

function App() {
    return (
        <div className="App">
            <LandingPage /> {/* Render the LandingPage component */}
        </div>
    );
}

export default App;