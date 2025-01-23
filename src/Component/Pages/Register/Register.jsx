import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Register = () => {
  return (
    <div>
        <h1>Registration Here</h1>
        <div className='p-4'>
            <NavLink to='/register/signup'><button className='btn btn-success p-2 me-4'>SignUp</button></NavLink>
            <NavLink to='/register/login'><button className='btn btn-danger p-2 '>Login</button></NavLink>
        </div>
        <Outlet/>
    </div>
  )
}

export default Register