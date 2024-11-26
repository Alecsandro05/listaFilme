import axios from "axios"
import { Bell, User } from "lucide-react"
import { useEffect, useState } from "react"
import SectionMovie from "./sectionMovie"
import movieImage from "/src/assets/movie.webp"
import { Navbar } from "../Navbar"
import { useNavigate } from "react-router-dom"
import { SearchElement } from "../../../components/SearchElement"

export function CreateMoviePage() {
  const navigate = useNavigate()
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])
  const [search, setSearch] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    console.log(search)
    if (!search) return

    navigate(`/search?=${search}`)
    setSearch("")
  }
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
  return (
    <div className="flex bg-zinc-800">
      <Navbar />
      <div className="bg-zinc-800 flex-1 pl-[13%]">
        <header className="flex justify-between p-6">
          <SearchElement
            handleSubmit={handleSubmit}
            setSearch={setSearch}
            search={search}
          />
          <div className="flex gap-6 items-center">
            <Bell className="text-zinc-50" />
            <User className="text-zinc-50" />
          </div>
        </header>
        <main className="px-12 py-10 space-y-6">
          <div className="flex justify-center">
            <div className="flex gap-7 w-2/3 h-[310px]  bg-zinc-950 rounded-xl  shadow-xl ">
              <img
                src={movieImage}
                alt=""
                className="w-full h-full  object-cover
                rounded-lg "
              />
            </div>
          </div>
          <SectionMovie movies={movies} nameSections="MOVIE" />
          <SectionMovie movies={series} nameSections="TV SERIES" />
        </main>
      </div>
    </div>
  )
}
