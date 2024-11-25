import axios from "axios"

import { ArrowLeft, ArrowRight, Bell, Search, User } from "lucide-react"

import { useEffect, useRef, useState } from "react"

export default function MovieList() {
  const [movies, setMovies] = useState([])
  const carousel = useRef(null)

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
      setMovies(response.data.results)
      console.log(response.data.results)
    })
  }

  function handleLeftClick(e) {
    e.preventDefault()
    console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }
  function handleRightClick(e) {
    e.preventDefault()
    console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  const selectedMovies = movies[0]
  console.log(selectedMovies)
  return (
    <div className="bg-zinc-800  flex-1">
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
        <section className="py-6 w-[80vw] relative">
          <span className="font-semibold text-sm text-zinc-50 tracking-wider ">
            MOVIES
          </span>
          <div
            ref={carousel}
            className="flex gap-5 overflow-hidden scroll-smooth "
          >
            {movies.map((movie) => {
              const { id, title, poster_path } = movie
              return (
                <div
                  key={id}
                  className="flex flex-col  m-3 p-3 w-72 flex-none "
                >
                  <div className="">
                    <img
                      src={`https://image.tmdb.org/t/p/original${poster_path}`}
                      alt=""
                      className="w-full h-full object-cover rounded-xl shadow-lg"
                    />
                  </div>
                  <div className="  flex flex-col space-y-2">
                    <span className="">{title}</span>
                    <span>Action, advanture,misteryl </span>
                  </div>
                </div>
              )
            })}
          </div>

          <button
            id="Teste2"
            onClick={handleLeftClick}
            className="absolute top-1/2 -translate-y-[100%] left-[-40px]"
          >
            <ArrowLeft id="teste" />
          </button>
          <button onClick={handleRightClick}>
            <ArrowRight
              id="teste"
              className="absolute top-1/2 -translate-y-[100%] right-[-58px]"
            />
          </button>
        </section>
        <section className="py-6">
          <span>Series</span>
          <div className="flex  gap-5">
            <div className="w-[280px] h-[150px] bg-amber-300"></div>
            <div className="w-[280px] h-[150px] bg-amber-300"></div>
            <div className="w-[280px] h-[150px] bg-amber-300"></div>
            <div className="w-[280px] h-[150px] bg-amber-300"></div>
            <div className="w-[280px] h-[150px] bg-amber-300"></div>
          </div>
        </section>
        <section className="">
          {/* sections filmes recem lancados */}
          <span>Series</span>
          <div className="flex  gap-5">
            <div className="w-[280px] h-[150px] bg-amber-300"></div>
            <div className="w-[280px] h-[150px] bg-amber-300"></div>
            <div className="w-[280px] h-[150px] bg-amber-300"></div>
            <div className="w-[280px] h-[150px] bg-amber-300"></div>
            <div className="w-[280px] h-[150px] bg-amber-300"></div>
          </div>
        </section>
      </main>
      {/* <main className="p-10  bg-red-500 h-1/4 flex justify-center items-center">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original${selectedMovie.poster_path}`}
            alt=""
            className="w-[360px] h-[280px] object-cover rounded-lg cursor-pointer"
          />
        </div>
      </main> */}
      {/* <ul className="grid  grid-cols-footer w-full gap-8 justify-between">
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
      </ul> */}
    </div>
  )
}
