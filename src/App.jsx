import { Route, Routes } from 'react-router-dom'
import Receive from './pages/Receive.jsx'
import Send from './pages/Send.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Receive />} />
      <Route path="/send" element={<Send />} />
    </Routes>
  )
}
