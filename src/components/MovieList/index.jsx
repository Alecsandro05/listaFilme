import axios from "axios"

import { useEffect, useState } from "react"

export default function MovieList() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies()
  }, [])
  const getMovies = () => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "5d4c9804b35cfb018be78e1bd80fd807",
        language: "pt-br",
      },
    }).then((response) => {
      console.log(response)
      setMovies(response.data.results)
      console.log(response.data.results)
    })
  }

  return (
    <main className="p-10  bg-[#242A32] flex justify-center items-center">
      <ul className="grid  grid-cols-footer w-full gap-8 justify-between">
        {movies.map((movie) => (
          <li key={movie.id} className="text-zinc-50 px-2 py-2 rounded-lg">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt=""
              className="w-[260px] object-cover rounded-lg cursor-pointer"
            />
            <p className="mt-4 text-lg text-zinc-50 font-semibold">
              {movie.title}
            </p>
          </li>
        ))}
      </ul>
    </main>
  )
}
