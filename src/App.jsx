import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Home from './components/shared/Home/Home.jsx'
import Navbar from './components/shared/Navbar/Navbar.jsx'
import SeatList from './components/SeatList/SeatList.jsx'
import { ReservedContext } from './assets/utils/ReservedContext.jsx'
import AdminPanel from './components/AdminPanel/AdminPanel.jsx'
import { CounterContext } from './assets/utils/CounterContext.jsx'

function App() {
  const [refresh, setRefresh] = useState(false)
  const [counter, setCounter] = useState(0)
  const [reservatedSeats, setReservatedSeats] = useState(0)
  return (
    <ReservedContext.Provider value={{ refresh, setRefresh, reservatedSeats, setReservatedSeats }}>
      <CounterContext.Provider value={{ counter, setCounter }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservate" element={<SeatList />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
        </Routes>
        <Navbar />
      </CounterContext.Provider>
    </ReservedContext.Provider>
  )
}

export default App
