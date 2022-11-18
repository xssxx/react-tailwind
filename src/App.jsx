import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"

import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <header className="h-12 bg-green-200">
        <Navbar />
      </header>
      <main className="flex h-[calc(100%-3rem)] justify-center items-center text-center">
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
