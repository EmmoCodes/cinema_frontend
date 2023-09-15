import React, { useContext, useEffect, useState } from 'react'
import { ReservedContext } from '../../assets/utils/ReservedContext.jsx'
import './SeatItem.scss'
import { CounterContext } from '../../assets/utils/CounterContext.jsx'

function SeatItem({ seat }) {
  const { refresh, setRefresh } = useContext(ReservedContext)
  const [reserved, setReserved] = useState(seat.reserved)
  const { reservatedSeats, setReservatedSeats } = useContext(ReservedContext)
  const { counter, setCounter } = useContext(CounterContext)

  const reservate = () => {
    fetch(`${import.meta.env.VITE_SERVER}/api/seats`, {
      method: 'PUT',

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...seat, reserved: true }),
    }).then(() => setRefresh(prev => !prev))
  }

  return (
    <div
      onClick={reservate}
      className={`rounded-3xl h-10 w-10 border-black relative al ${seat.type} ${seat.reserved ? 'reserved' : ''}`}>
      <p className="pl-3 pt-2">{seat.id}</p>
    </div>
  )
}

export default SeatItem
