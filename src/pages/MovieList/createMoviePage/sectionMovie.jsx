import { ArrowLeft, ArrowRight } from "lucide-react"
import { useRef } from "react"

export default function SectionMovie({ movies, nameSections }) {
  const carousel = useRef(null)
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
  return (
    <section className="py-6 w-[80vw] relative">
      <span className="font-semibold text-sm text-zinc-50 tracking-wider ">
        {nameSections}
      </span>
      <div ref={carousel} className="flex gap-5 overflow-hidden scroll-smooth ">
        {movies.map((movie) => {
          const { id, title, name, poster_path } = movie
          return (
            <div key={id} className="flex flex-col  m-3 p-3 w-72 flex-none ">
              <div className="pb-3">
                <img
                  src={`https://image.tmdb.org/t/p/original${poster_path}`}
                  alt=""
                  className="w-full h-full object-cover rounded-xl shadow-lg "
                />
              </div>
              <div className="  flex flex-col space-y-2">
                <h2 className="text-zinc-50 font-semibold ">{name || title}</h2>
                <p></p>
              </div>
            </div>
          )
        })}
      </div>

      <button
        id="Teste2"
        onClick={handleLeftClick}
        className="absolute top-1/2 -translate-y-[100%] left-[-50px]"
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
  )
}
