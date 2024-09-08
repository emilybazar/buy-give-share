# Buy Give Share Project Documentation

## Project Overview

Buy Give Share is a platform designed to connect businesses and charities to facilitate transparent donations. This document outlines the project's architecture, including the backend server setup and the frontend application structure.

## Author
Emily Bazar is the Chief Software Engineer at Buy Give Share. As the sole full-stack developer on the founding team of five, she leads the technical development of the platform, driving both the front-end and back-end engineering efforts.

As a current Master's student in Computer Science at Seattle University, Emily is continuously expanding her knowledge and honing her skills. She embraces new challenges and uses every project as an opportunity to grow, applying what she learns to improve the platform.

## Technology Stack

### Frontend

The frontend of the Buy Give Share project is built using **React**, a popular JavaScript library for building user interfaces for web applications.

### Backend

The backend may be structured around **Node.js** with **Express.js** or **Java**. The decision will be made based on the final architecture needs of the platform. Both options provide robust server-side platforms capable of handling HTTP requests, business logic, and data management.

## Repository Structure

### Backend

Located in the `backend` folder, responsible for API services, database management, and server-side logic.

**Components:**
- **`server.js`**: Initializes the Express server and defines API routes.
- **`main.java`**: (Java - placeholder) Could potentially serve as the main application entry point for the backend.

### Frontend

Developed using React and organized into components and utility files. The project now includes several page components:

**Key Files and Directories:**
- **`src`**: Main directory for React components and application logic.
  - **`App.js`**: Serves as the root component that orchestrates the rendering of the entire application.
  - **`index.js`**: Entry point for React rendering, setting up the root component and linking to the HTML document.
  - **`setupTests.js`**: Configures the testing framework for React components.
  - **`/components`**: Houses reusable React components.
    - **`/pages`**: Contains page components for the platform, including:
      - **LandingPage.js**: Provides overview of Buy Give Share and its purpose and features
      - **AboutPage.js**: Displays the 'About Us' information.
      - **JoinUsPage.js**: Highlights the benefits of joining the platform for businesses and charities, with links to their respective sign-up pages.
      - **LogInPage.js**: Manages user authentication and login process.
      - **SignUpPage.js**: Handles the user registration flow.
      - **General.js**: Provides common elements like the header and footer for other pages.
  - **`/assets`**: Contains images used throughout the site.


## Usage

The Buy Give Share project is be published and hosted on [buygiveshare.com](http://buygiveshare.com). Users will be able to access the application through this domain. 
The platform will connect with Clover's API to allow businesses and charities to track and manage donations seamlessly.


## License

This project is proprietary software intended exclusively for use by the Buy Give Share startup. Unauthorized use, modification, or distribution of the code is strictly prohibited. All rights are reserved by the Buy Give Share team.

