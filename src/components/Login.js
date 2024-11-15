import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const[isSignInForm,setIsSignInForm]=useState();

  const ToggleSignInForm=()=>{
setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
    <Header/>

    <div className='absolute'>
    
 <img src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_medium.jpg"
 
    alt="logo"/>
    </div>
    <form className='absolute w-3/12 p-12 bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
    <h1 className='text-3xl font-bold'>{!isSignInForm ?"Sign In":"Sign Up"}</h1>
    {isSignInForm && <input className='p-4 my-4 w-full bg-gray-800 !bg-gray-800" text-black'

     type="text"
     placeholder='Full Name'

      />
    }
            <input className='p-4 my-4 w-full bg-gray-800 !bg-gray-800" text-black'  type="text" placeholder="Emai" />
            <input className='p-4 my-4 w-full bg-gray-800 !bg-gray-800" text-black' type="password"  placeholder="Password"  />
            <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>{!isSignInForm?"Sign In":"Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={ToggleSignInForm}>{!isSignInForm ? "New to netflix ?Sign  Up now":"Already user exist sign In"}</p>
        </form>
    </div>
    
    
  )
}

export default Login
