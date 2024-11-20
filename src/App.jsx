import MovieList from "./components/MovieList"
import { Navbar } from "./components/Navbar"

function App() {
  return (
    <div className="h-screen overflow-x-hidden ">
      <Navbar />
      <MovieList />
    </div>
  )
}

export default App
