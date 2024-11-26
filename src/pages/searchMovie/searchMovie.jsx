// import { useSearchParams } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
import SearchElement from "../../components/SearchElement"
import { useEffect, useState } from "react"
import axios from "axios"
import { Navbar } from "../MovieList/Navbar"

export function SearchMovie() {
  const [searchParams] = useSearchParams()
  const [movies, setMovies] = useState([])
  const query = searchParams.get("")
  console.log(query)

  const getSearchedMovies = () => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/search/movie",
      params: {
        query: `${query}`,
        api_key: "5d4c9804b35cfb018be78e1bd80fd807",
        language: "pt-br",
      },
    }).then((response) => {
      setMovies(response.data.results)
      console.log(response.data.results)
    })
  }
  useEffect(() => {
    getSearchedMovies()
  }, [])
  return (
    <div className="bg-zinc-800 overflow-x-hidden pl-[13%]">
      <Navbar />
      <div className="pt-8">
        <SearchElement />
      </div>
      <h2 className="text-center text-4xl text-zinc-50 mt-6 pt-6">
        Resultados para:{" "}
        <span className="text-yellow-400">{query.toLocaleUpperCase()}</span>
      </h2>
      <div className="mt-9">
        <div className="flex gap-5 flex-wrap justify-center scroll-smooth  ">
          {movies.map((movie) => {
            const { id, title, name, poster_path } = movie
            return (
              <div key={id} className="flex flex-col   m-3 p-3 w-72 flex-none ">
                <div className="pb-3">
                  <img
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    alt=""
                    className="w-full h-full object-cover rounded-xl shadow-lg "
                  />
                </div>
                <div className="  flex flex-col space-y-2">
                  <h2 className="text-zinc-50 font-semibold ">
                    {name || title}
                  </h2>
                  <p></p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
