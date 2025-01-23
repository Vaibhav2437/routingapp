import React from 'react'

const Signup = () => {
    return (
        <div>
            <h1>SignUp Here</h1>
            <div className='w-50 mx-auto bg-success p-5  rounded-4'>
                <div className='w-75 mx-auto'>
                    <div className=''>
                        <input type='text' placeholder='Enter Full Name' className='form-control'/>
                    </div>
                    <div className='mt-3'>
                        <input type='Email' placeholder='Enter Email' className='form-control'/>
                    </div>
                    <div className='mt-3'>
                        <input type='password' placeholder='Enter Password' className='form-control'/>
                    </div>
                </div>
                <button className='mt-3 btn btn-dark text-light'>Submit</button>

            </div>
        </div>
    )
}

export default Signup