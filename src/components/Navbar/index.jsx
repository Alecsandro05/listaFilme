// import { Search } from "lucide-react"

export function Navbar() {
  return (
    <header className="w-screen bg-[#242A32] p-10">
      <nav className="w-full flex justify-between">
        <h1 className="font-bold text-2xl text-zinc-50 ">Filmes</h1>
        {/* <div className=" h-14 px-8 bg-[#3A3F47] cursor-pointer border-zinc-800 rounded-lg flex items-center gap-4">
          <Search className="text-zinc-200 size-5" />
          <input
            type="text"
            placeholder="Busque um filme"
            className="bg-transparent text-lg text-zinc-400 outline-none w-full"
          />
        </div> */}
      </nav>
    </header>
  )
}
