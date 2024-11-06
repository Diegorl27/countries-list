# Country Info App

This is a test project for the Full Stack Developer role. The application consists of a backend and frontend that provide information about countries, including population data and neighboring countries.

## Table of Contents

- [Project Description](#project-description)
- [Project Structure](#project-structure)
- [Requirements](#requirements)
- [Setup Instructions](#setup-instructions)
- [Available Commands](#available-commands)
- [Backend API](#backend-api)
- [Technical Notes](#technical-notes)

## Project Description

### Backend

The backend is built with Node.js (Express) and provides two main endpoints:
- `/api/countries`: Retrieves a list of available countries.
- `/api/country/:code`: Retrieves detailed information about a specific country, including population data and neighboring countries.

### Frontend

The frontend is built with Next.js (using React) and displays the list of countries and detailed information for each selected country, including:
- Country name, flag, and region.
- List of neighboring countries (linked for more details).
- Population growth chart over time.

## Project Structure
country-info-app/
├── backend/                  # Backend code
│   ├── src/
│   │   ├── index.ts          # Backend entry point
│   │   └── …                 # Other backend files
│   └── package.json
├── frontend/                 # Frontend code
│   ├── src/
│   │   ├── pages/            # Next.js pages
│   │   │   ├── index.tsx     # Main page with country list
│   │   │   └── country/      # Country details page
│   │   └── lib/
│   │       ├── hooks/
│   │           ├──useCountryInfo.ts
│   │   └── …                 # Other frontend files
│   ├── public/
│   ├── styles/
│   └── package.json
└── README.md

## Requirements

- Node.js (version 16 or higher)
- npm or yarn for package management

## Setup Instructions

### Clone the Repository

git clone <REPOSITORY_URL>
cd country-info-app


### Backend Setup
- cd backend
- Create a .env file in the backend folder with the following structure: PORT=5001
- npm install

### FrontEnd Setup
- cd ../frontend
- Create a .env.local file in the frontend folder with the backend URL: NEXT_PUBLIC_BACKEND_URL=http://localhost:5001
- npm install

## Available Commands

Backend

From the backend folder, you can use the following commands:
	•	npm run dev: Starts the server in development mode.
	•	npm run build: Compiles TypeScript code to JavaScript.
	•	npm start: Starts the server in production mode.

Frontend

From the frontend folder, you can use the following commands:
	•	npm run dev: Starts the Next.js app in development mode.
	•	npm run build: Builds the app for production.
	•	npm start: Starts the Next.js app in production mode.

Backend API

	1.	Country List
	•	Endpoint: /api/countries
	•	Method: GET
	•	Description: Returns a list of available countries.
	2.	Country Information
	•	Endpoint: /api/country/:code
	•	Method: GET
	•	Parameter: code - Country code.
	•	Description: Returns detailed information about a country, including neighboring countries and historical population data.

Technical Notes

	•	Styling: The project uses Tailwind CSS for styling, and the layout is fully responsive.
	•	Charts: chart.js is used to display population data over time.
	•	State Management: Each component manages its own state, and backend and frontend communicate through API calls.

Final Notes

This project is configured to run locally. Make sure both the backend and frontend servers are running simultaneously to ensure the application functions correctly.

If you encounter any issues running the project, check the .env files and port configurations.