import React from 'react'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center h-lvh gap-4 bg-green-200  '>
      <h1>Register</h1>
      <div className='flex  '>
        <form className='flex flex-col  gap-4 p-8 bg-white '>
          <input type='text' placeholder='username' className='p-2  border-b-[1px] border-grey-300 text-grey-700  ' />
          <input type='email' placeholder='email' className='p-2 border-b-[1px] border-grey-300'/>
          <input type='password' placeholder='password' className='p-2 border-b-[1px] border-grey-300'/>
          <button className='bg-teal-700 text-white'>Register</button>
          <span className='flex flex-col items-center'>Do you have an account?  <Link to="/login">Login</Link> </span>
        </form>
      </div> 
    </div>
    </div>
  )
}

export default Register
