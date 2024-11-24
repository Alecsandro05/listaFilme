// import { Search } from "lucide-react"

import { Bell, CircleCheck, Heart } from "lucide-react"

export function Navbar() {
  return (
    <nav className="bg-zinc-950 w-[220px]  text-white ">
      <div className="flex flex-col items-center py-6">
        <h1 className="text-2xl font-bold">DXX.MOVIES</h1>
      </div>
      <div>
        <ul className="flex flex-col px-9 space-y-6 py-10">
          <span className="text-zinc-500">New feed</span>
          <li className="flex gap-3 cursor-pointer">
            <CircleCheck />
            Browse
          </li>
          <li className="flex gap-3 cursor-pointer">
            <Heart />
            Watchlist
          </li>
          <li className="flex gap-3 cursor-pointer">
            <Bell />
            Remind
          </li>
        </ul>

        <ul className="flex flex-col px-9 space-y-6 py-10">
          <span className="text-zinc-500">CATEGORIES</span>
          <li>Action</li>
          <li>Horror</li>
          <li>Advanture</li>
          <li>war</li>
          <li>Crime</li>
        </ul>
      </div>
    </nav>
  )
}
