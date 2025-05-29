const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()
const port = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// API endpoint for upcoming matches
app.get("/api/matches", async (req, res) => {
  try {
    // Using dynamic import for node-fetch (ES module)
    const fetch = (await import("node-fetch")).default

    // TheSportsDB API endpoint for upcoming Premier League matches
    const apiUrl = "https://www.thesportsdb.com/api/v1/json/3/eventsnextleague.php?id=4328"

    console.log("Fetching from API URL:", apiUrl)

    const response = await fetch(apiUrl)

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`)
    }

    const data = await response.json()
    console.log("API Response received")

    // Extract events from the response
    const matches = data.events || []

    // Transform the data to include only what we need
    const transformedMatches = matches.map((match) => ({
      id: match.idEvent,
      homeTeam: match.strHomeTeam,
      awayTeam: match.strAwayTeam,
      date: match.dateEvent,
      time: match.strTime,
      venue: match.strVenue,
      league: match.strLeague,
      season: match.strSeason,
    }))

    res.json({
      success: true,
      matches: transformedMatches,
      count: transformedMatches.length,
    })
  } catch (error) {
    console.error("Error fetching matches:", error)
    res.status(500).json({
      success: false,
      error: "Failed to fetch upcoming matches",
      message: error.message,
    })
  }
})

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" })
})

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")))

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"))
  })
}

app.listen(port, () => {
  console.log(`🚀 Backend server running on http://localhost:${port}`)
  console.log(`📊 API endpoint: http://localhost:${port}/api/matches`)
})
