import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <section>
      <nav className="text-red-500 text-2xl flex gap-4 ml-auto mr-auto mt-4 bottom-4 left-4 absolute h-12">
        <Link className="border-black border-2 rounded p-1" to="/">
          Home
        </Link>
        <Link className="border-black border-2 rounded p-1" to="reservate">
          Reservate
        </Link>
        <Link className="border-black border-2 rounded p-1" to="adminpanel">
          Adminpanel
        </Link>
      </nav>
    </section>
  )
}

export default Navbar
