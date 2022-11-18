import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex justify-around h-full items-center">
        <div className="text-xl font-bold">
            <h1>XSSXX</h1>
        </div>
        <ul className="flex flex-row text-lg cursor-pointer">
            <Link to="/"><li className="px-2 hover:underline">Home</li></Link>
            <Link to="/login"><li className="px-2 hover:underline">Login</li></Link>
            <Link to="/register"><li className="px-2 hover:underline">Register</li></Link>
        </ul>
    </div>
  )
}

export default Navbar