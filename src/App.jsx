import { Navbar } from "./components/Navbar"
import MovieList from "./components/MovieList"

function App() {
  return (
    <div className="flex bg-zinc-800">
      <Navbar />
      <MovieList />
    </div>
  )
}

export default App
