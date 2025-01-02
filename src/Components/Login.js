import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import {getAuth, createUserWithEmailAndPassword} from  "firebase/auth";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errrorMessage,setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
   

    const handleButtonClick = () => {

        console.log(email.current.value);
        console.log(password.current.value);

       const message= checkValidData(email.current.value, password.current.value);
       setErrorMessage(message);
       if(message) return;
    }
    const toggleSignInForm = () => {
        setIsSignInForm((prevState) => !prevState);
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-hi-20241111-TRIFECTA-perspective_0cd6cd9f-ff1b-4eb6-a5ec-9f54293bf5b9_large.jpg" alt="logo" />
            </div>
            <form onSubmit={ (e) => e.preventDefault() } className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (<input type='text' placeholder='Full Name' className='p-2 m-2 w-full bg-gray-700'></input>)}
                <input ref={email} type='text' placeholder='Email' className='p-2 m-2 w-full bg-gray-700'></input>
                <input ref={password} type='password' placeholder='Password' className='p-2 m-2 w-full bg-gray-700'></input>
                <p className='text-red-500'>{errrorMessage}</p>
                <button className='p-4 ml-2 my-4 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>Sign In</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now."}</p>
            </form>
        </div>
    )
}

export default Login;
