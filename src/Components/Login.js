import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice'
import { AVATAR_USER, BG_URL } from '../utils/constants';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errrorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {

        //console.log(email.current.value);
        //console.log(password.current.value);

        const message = checkValidData(email.current.value, password.current.value, name?.current?.value);
        setErrorMessage(message);
        if (message) return;
        // Sign In Sign Up Logic
        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: AVATAR_USER
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                            photoURL: photoURL,
                        }));
                    }).catch((error) => {
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
        else {
            // Sign In Logic 
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                   
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
    }
    const toggleSignInForm = () => {
        setIsSignInForm((prevState) => !prevState);
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src={BG_URL} alt="logo" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (<input ref={name} type='text' placeholder='Full Name' className='p-2 m-2 w-full bg-gray-700'></input>)}
                <input ref={email} type='text' placeholder='Email' className='p-2 m-2 w-full bg-gray-700'></input>
                <input ref={password} type='password' placeholder='Password' className='p-2 m-2 w-full bg-gray-700'></input>
                <p className='text-red-500 font-bold text-lg py-2'>{errrorMessage}</p>
                <button className='p-4 ml-2 my-4 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>Sign In</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now."}</p>
            </form>
        </div>
    )
}

export default Login;
