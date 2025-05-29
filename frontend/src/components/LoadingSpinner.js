function LoadingSpinner() {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner"></div>
        <div className="loading-text">
          <h3>Loading Matches...</h3>
          <p>Fetching the latest fixtures</p>
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner
