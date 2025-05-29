import MatchList from "./components/MatchList"
import Header from "./components/Header"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <MatchList />
      </main>
      <footer className="footer">
        <p>&copy; 2024 Soccer Matches App. Data provided by TheSportsDB.</p>
      </footer>
    </div>
  )
}

export default App
