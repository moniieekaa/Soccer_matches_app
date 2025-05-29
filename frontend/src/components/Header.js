function Header() {
  const title = "⚽ Upcoming Soccer Matches".split("")

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="title">
          {title.map((char, index) => (
            <span key={index} className="title-char" style={{ animationDelay: `${index * 0.05}s` }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <p className="subtitle">Premier League Fixtures</p>
      </div>
    </header>
  )
}

export default Header
