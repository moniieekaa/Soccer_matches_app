"use client"

import { useEffect, useState } from "react"
import MatchCard from "./MatchCard"
import LoadingSpinner from "./LoadingSpinner"

function MatchList() {
  const [matches, setMatches] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchMatches()
  }, [])

  const fetchMatches = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("/api/matches")

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      if (data.success && data.matches) {
        setMatches(data.matches)
      } else {
        throw new Error(data.message || "Failed to load matches")
      }
    } catch (error) {
      console.error("Error fetching matches:", error)
      setError("Failed to load matches. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  const handleRetry = () => {
    fetchMatches()
  }

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-message">
          <h3>Oops! Something went wrong</h3>
          <p>{error}</p>
          <button className="retry-button" onClick={handleRetry}>
            Try Again
          </button>
        </div>
      </div>
    )
  }

  if (matches.length === 0) {
    return (
      <div className="no-matches">
        <h3>No upcoming matches found</h3>
        <p>Check back later for new fixtures!</p>
        <button className="retry-button" onClick={handleRetry}>
          Refresh
        </button>
      </div>
    )
  }

  return (
    <div className="match-list-container">
      <div className="matches-header">
        <h2>Upcoming Matches ({matches.length})</h2>
        <button className="refresh-button" onClick={handleRetry}>
          🔄 Refresh
        </button>
      </div>
      <div className="match-list">
        {matches.map((match, index) => (
          <MatchCard key={match.id} match={match} index={index} />
        ))}
      </div>
    </div>
  )
}

export default MatchList
