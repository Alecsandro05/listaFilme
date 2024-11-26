import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { SearchMovie } from "./pages/searchMovie/searchMovie"
import { CreateMoviePage } from "./pages/MovieList/createMoviePage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateMoviePage />,
  },
  {
    path: "/search",
    element: <SearchMovie />,
  },
])

function App() {
  return <RouterProvider router={router} />
}
export default App
