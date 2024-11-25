import axios from "axios"

import { Bell, Search, User } from "lucide-react"

import { useEffect, useState } from "react"
import SectionMovie from "./sectionMovie"

export default function MovieList() {
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])

  useEffect(() => {
    getMovies()
    getSeries()
  }, [])

  const getSeries = () => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/tv",
      params: {
        api_key: "5d4c9804b35cfb018be78e1bd80fd807",
        language: "pt-br",
      },
    }).then((response) => {
      setSeries(response.data.results)
      console.log(response.data.results)
    })
  }
  const getMovies = () => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "5d4c9804b35cfb018be78e1bd80fd807",
        language: "pt-br",
      },
    }).then((response) => {
      setMovies(response.data.results)
    })
  }

  const selectedMovies = movies[0]

  return (
    <div className="bg-zinc-800 flex-1 pl-[13%]">
      <header className="flex justify-between p-6">
        <div className="w-full flex justify-center ">
          <div className="flex w-2/4 bg-zinc-700 gap-5 px-6 py-3 rounded-2xl">
            <Search className="text-zinc-500" />
            <input
              type="text"
              className="w-full bg-transparent outline-none text-zinc-50"
              placeholder="Search any movies"
            />
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <Bell className="text-zinc-50" />
          <User className="text-zinc-50" />
        </div>
      </header>
      <main className="px-12 py-10 space-y-6">
        <div className="flex justify-center">
          <div className="flex gap-7 w-[810px] h-[310px]  bg-zinc-950 rounded-xl  shadow-xl ">
            <div className=" shadow-md rounded-lg text-zinc-50 p-4 space-y-4">
              <h1 className="text-4xl ">{selectedMovies.title}</h1>
              <p className="text-xs mb-1">{selectedMovies.overview}</p>
              <p className="">lançamento: {selectedMovies.release_date}</p>
              <button className="bg-red-800 px-4 py-3  rounded-2xl shadow-md shadow-red-500  ">
                <a
                  href="https://lucide.dev/icons/user"
                  className="font-semibold text-xl"
                >
                  Watch trailer
                </a>
              </button>
            </div>
            <div className="w-full">
              <img
                src={`https://image.tmdb.org/t/p/original${selectedMovies.poster_path}`}
                alt=""
                className="w-full h-full  object-cover
                rounded-lg cursor-pointer"
              />
            </div>
          </div>
        </div>
        <SectionMovie movies={movies} nameSections="MOVIE" />
        <SectionMovie movies={series} nameSections="TV SERIES" />
      </main>
    </div>
  )
}
