# Soccer Matches App

A full-stack application that displays upcoming soccer matches using Node.js + Express backend and React frontend.

## Features

- 🏆 Displays upcoming Premier League matches
- ⚡ Real-time data from TheSportsDB API
- 📱 Responsive design for all devices
- 🎨 Beautiful, modern UI with animations
- 🔄 Loading states and error handling
- 🔃 Refresh functionality

## Tech Stack

**Backend:**
- Node.js
- Express.js
- CORS
- node-fetch

**Frontend:**
- React
- CSS3 with animations
- Responsive design

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm

### Step 1: Clone/Download the Project

### Step 2: Install Backend Dependencies
\`\`\`bash
cd backend
npm install
\`\`\`

### Step 3: Install Frontend Dependencies
\`\`\`bash
cd ../frontend
npm install
\`\`\`

### Step 4: Start the Backend Server
\`\`\`bash
cd ../backend
npm start
\`\`\`
The backend will run on http://localhost:5000

### Step 5: Start the Frontend (New Terminal)
\`\`\`bash
cd frontend
npm start
\`\`\`
The frontend will run on http://localhost:3000

### Step 6: View in Browser
Open your browser and go to: http://localhost:3000

## API Endpoints

- `GET /api/matches` - Fetch upcoming soccer matches
- `GET /api/health` - Health check endpoint

## Project Structure

\`\`\`bash
├── backend/
│   ├── server.js          # Express server with API endpoints
│   ├── package.json       # Backend dependencies
│   └── .env              # Environment variables
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.js        # Main App component
│   │   ├── App.css       # Styles
│   │   └── index.js      # React entry point
│   └── package.json      # Frontend dependencies
\`\`\`

## Features Included

✅ **Backend (Node.js + Express):**
- RESTful API endpoints
- CORS enabled
- Error handling
- Data transformation
- Health check endpoint

✅ **Frontend (React):**
- Component-based architecture
- State management with hooks
- Loading states
- Error handling with retry
- Responsive design
- Beautiful animations
- Modern UI/UX

✅ **Data Display:**
- Home team name
- Away team name
- Match date and time (formatted)
- Venue information
- League information

## Troubleshooting

**If the backend fails to start:**
- Make sure Node.js is installed (v16+)
- Check if port 5000 is available
- Run `npm install` in the backend directory

**If the frontend shows "Failed to load matches":**
- Ensure the backend is running on port 5000
- Check browser console for errors
- Try the refresh button

**If no matches appear:**
- The API might be temporarily unavailable
- Check the backend console for API response logs
- Try refreshing after a few minutes

## Development

To run in development mode with auto-restart:

**Backend:**
\`\`\`bash
cd backend
npm install -g nodemon
npm run dev
\`\`\`

**Frontend:**
\`\`\`bash
cd frontend
npm start
\`\`\`

## Production Build

To create a production build:

\`\`\`bash
cd frontend
npm run build
\`\`\`

The build files will be in the `frontend/build` directory.

## License

This project is for educational purposes. Data provided by TheSportsDB.
