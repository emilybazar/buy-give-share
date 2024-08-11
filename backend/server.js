// AUTHOR: Emily Bazat
// PROGRAM: server.js
// DATE:    August 2024
// PURPOSE: This file sets up a basic Express server to handle API requests for the Buy Give Share project.
// INPUT:   No specific input. Runs as a server process to handle incoming HTTP requests.
// PROCESS: Initializes an Express server, sets up middleware, and defines basic routes.
// OUTPUT:  The server will respond to HTTP requests and log activity to the console.

const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // Default to port 5000 if not specified in environment variables

// Middleware
app.use(express.json()); // For parsing application/json

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World! This is the Buy Give Share backend.');
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
