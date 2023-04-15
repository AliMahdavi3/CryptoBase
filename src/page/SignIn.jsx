import React from 'react'
import { NavLink } from "react-router-dom"
const SignIn = () => {
  return (
    <div className='container'>
      <div className='w-50 mx-auto px-4 py-5'>
        <h1 className='fs-2 fw-bold'>Sign In</h1>
        <form>
          <div className='my-4'>
            <label>Email</label>
            <div className='w-100 my-2 shadow-lg rounded-5 email'>
              <input type="email" placeholder='Email' className='w-100 rounded-5 border-0 py-3 px-4'/>
              <i className='bi bi-envelope position-absolute mt-3 d-none d-sm-inline'></i>
            </div>
          </div>
           <div className='my-4'>
            <label>Password</label>
            <div className='w-100 my-2 shadow-lg rounded-5 email'>
              <input type="password" placeholder='Password' className='w-100 rounded-5 border-0 py-3 px-4'/>
              <i className='bi bi-key position-absolute mt-3 d-none d-sm-inline'></i>
            </div>
          </div>
          <button className='py-3 px-4 w-100 border-0 rounded-5 btn btn-success shadow-lg mt-2'>Sign In</button>
        </form>
        <p className='text-center mt-3'>Don't have an account ? <NavLink className="text-decoration-none" to="/signup">Sign Up</NavLink></p>
      </div>
    </div>
  )
}

export default SignIn