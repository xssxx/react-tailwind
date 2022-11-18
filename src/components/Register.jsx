import React from 'react'

const Register = () => {
  return (
    <div className="w-64 h-72 bg-gray-100 p-4 shadow-xl rounded-xl">
        <form className="flex flex-col">
            <label>email</label>
            <input className="rounded-lg mt-2" type="email" placeholder="email" />
            <label>username</label>
            <input className="rounded-lg mt-2" type="text" placeholder="username" />
            <label>password</label>
            <input className="rounded-lg mt-2" type="password" placeholder="password" />
            <button className="bg-green-400 hover:bg-green-300 w-fit mx-auto px-4 py-1 mt-4 rounded-lg">Login</button>
        </form>
    </div>
  )
}

export default Register