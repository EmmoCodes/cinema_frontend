import React, { useContext, useEffect, useState } from 'react'
import { ReservedContext } from '../../assets/utils/ReservedContext.jsx'

function AdminPanel() {
  const [reservedSeats, setReservedSeats] = useState([])
  const { refresh, setRefresh } = useContext(ReservedContext)
  const total = reservedSeats.reduce((accumulator, seat) => accumulator + seat.price, 0)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER}/api/reserved`)
      .then(response => response.json())
      .then(data => setReservedSeats(data))
      .catch(err => console.log(err))
  }, [refresh])

  const reset = () => {
    fetch(`${import.meta.env.VITE_SERVER}/api/reserved`, {
      method: 'POST',
    }).then(() => setRefresh(prev => !prev))
  }
  console.log(total)
  return (
    <section className="ml-auto mr-auto max-w-fit mt-12">
      <div className=" border-black border-4 rounded-2xl h-44 w-44 flex flex-col justify-around text-center mb-12">
        <p className="text-6xl ">{24 - reservedSeats.length}</p>
        <p className="text-4xl">Free seats</p>
      </div>
      <div className=" border-black border-4 rounded-2xl h-44 w-44 flex flex-col justify-around text-center">
        <p className="text-6xl ">{total} $</p>
        <p className="text-4xl">Money earned</p>
      </div>
      <div onClick={reset} className=" h-24 w-24 bg-red-600 rounded-full mt-12 ml-auto mr-auto">
        <p className="pt-7 pl-4 text-2xl">Reset</p>
      </div>
    </section>
  )
}

export default AdminPanel
