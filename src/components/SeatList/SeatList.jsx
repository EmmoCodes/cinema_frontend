import React, { useContext, useEffect, useState } from 'react'
import SeatItem from '../SeatItem/SeatItem.jsx'
import { ReservedContext } from '../../assets/utils/ReservedContext.jsx'

function SeatList() {
  const [seats, setSeats] = useState([])
  const { refresh } = useContext(ReservedContext)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER}/api/seats`)
      .then(response => response.json())
      .then(data => setSeats(data))
      .catch(err => console.log(err))
  }, [refresh])

  return (
    <section className="gridOwn">
      {seats.map(seat => (
        <SeatItem key={crypto.randomUUID()} seat={seat} />
      ))}
      <div className="w-80 h-4 bg-zinc-800 ml-2"></div>
    </section>
  )
}

export default SeatList
