import React, { useState } from 'react'
import Inputbox from '../componets/Inputbox'
import Button from '../componets/Button'
import { Link } from 'react-router-dom'
function Login() {
  const [message ,setMessage]= useState("")
  return (
         <div className='h-[calc(100vh-120px)]  flex justify-center items-center'>
             
                <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8'>
                   <h1 className='text-2xl font-semibold'>Please Login</h1>
                  <div>
                   <form >
                      <div className='mb-4'>
                       <label className='block text-gray-700 text-sm font-bold mb-2 mt-2' htmlFor="email">
                          Email</label>
                       <input type="text" name="email" id="email" placeholder='Email Address'  className='shadow appreance-none border rounded w-full py-2 px-3
                        leading-tight focus:outline-none focus:shadow'/>  
                      </div>
                    </form>
                  </div>
                  <div>
                  <form >
                      <div className='mb-4'>
                       <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">
                          Password</label>
                       <input type="text" name="password" id="password" placeholder='Password'  className='shadow appreance-none border rounded w-full py-2 px-3
                        leading-tight focus:outline-none focus:shadow'/>  
                      </div>
                   </form>
                  </div>
                  {
                    message && <p className='text-red-500 text0xs itallic mb-3'>{message}</p>
                  }
                  <div>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none '>Login</button>
                  </div>
                    <p className='pt-2'>
                       Haven't an account? Please 
                       <Link to="/register" className='text-blue-500 hover:text-blue-700'> Register</Link>
                    </p>
                </div>    
          </div>
    
  )
}

export default Login