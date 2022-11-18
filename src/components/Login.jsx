import React from 'react'

const Login = () => {
  return (
    <div className="w-64 h-64 bg-gray-100 p-4 shadow-xl rounded-xl">
        <form className="flex flex-col">
            <label>username</label>
            <input className="rounded-lg mt-2" type="text" placeholder="username" />
            <label>password</label>
            <input className="rounded-lg mt-2" type="password" placeholder="password" />
            <button className="bg-green-400 hover:bg-green-300 w-fit mx-auto px-4 py-1 mt-4 rounded-lg">Login</button>
        </form>
    </div>
  )
}

export default Login