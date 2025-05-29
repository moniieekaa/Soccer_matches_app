function MatchCard({ match, index }) {
  const formatDateTime = (dateStr, timeStr) => {
    try {
      if (!dateStr || !timeStr) {
        return "Date TBD"
      }

      // Parse the date and time
      const [year, month, day] = dateStr.split("-").map(Number)
      const [hours, minutes] = timeStr.split(":").map(Number)

      const matchDate = new Date(year, month - 1, day, hours, minutes)

      if (isNaN(matchDate.getTime())) {
        return `${dateStr} ${timeStr}`
      }

      // Format the date
      const dateOptions = {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      }

      const timeOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }

      const formattedDate = matchDate.toLocaleDateString("en-US", dateOptions)
      const formattedTime = matchDate.toLocaleTimeString("en-US", timeOptions)

      return { date: formattedDate, time: formattedTime }
    } catch (error) {
      console.error("Error formatting date/time:", error)
      return `${dateStr} ${timeStr}`
    }
  }

  const dateTime = formatDateTime(match.date, match.time)
  const isDateTimeObject = typeof dateTime === "object"

  return (
    <div className="match-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="match-header">
        <div className="league-info">
          <span className="league-name">{match.league}</span>
          {match.season && <span className="season">{match.season}</span>}
        </div>
      </div>

      <div className="teams-container">
        <div className="team home-team">
          <div className="team-name">{match.homeTeam}</div>
          <div className="team-label">HOME</div>
        </div>

        <div className="vs-section">
          <div className="vs-text">VS</div>
          <div className="match-time">
            {isDateTimeObject ? (
              <>
                <div className="match-date">{dateTime.date}</div>
                <div className="match-time-text">{dateTime.time}</div>
              </>
            ) : (
              <div className="match-date">{dateTime}</div>
            )}
          </div>
        </div>

        <div className="team away-team">
          <div className="team-name">{match.awayTeam}</div>
          <div className="team-label">AWAY</div>
        </div>
      </div>

      {match.venue && (
        <div className="venue-info">
          <span className="venue-icon">🏟️</span>
          <span className="venue-name">{match.venue}</span>
        </div>
      )}
    </div>
  )
}

export default MatchCard
