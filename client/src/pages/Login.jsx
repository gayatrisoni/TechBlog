import React from 'react'
import {Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center h-lvh gap-4 bg-green-100  '>
      <h1>Login</h1>
      <div className='flex  '>
        <form className='flex flex-col  gap-4 p-8 bg-white '>
          <input type='text' placeholder='username' className='p-2  border-b-[1px] border-grey-300 text-grey-700  ' />
          <input type='password' placeholder='password' className='p-2 border-b-[1px] border-grey-300'/>
          <button className='bg-teal-700 text-white'>Login</button>
          <span className='flex flex-col items-center'>Don't you have an account?  <Link to="/register">Register</Link> </span>
        </form>
      </div> 
    </div>
  )
}

export default Login
