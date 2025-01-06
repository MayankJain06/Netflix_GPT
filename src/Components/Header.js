import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import  { LOGO } from '../utils/constants.js';

const Header = () => {
const navigate=useNavigate();
const dispatch = useDispatch();
const user= useSelector(store=>store.user);
const movies = useSelector(store=>store.movies);
console.log(movies);
  const handleSignOut =()=>{
    signOut(auth).then(() =>{}).catch((error) => {
      navigate("/error");
    });
  }

  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email,displayName, photoURL} = user;
        console.log(user);
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when Component Unmounts 
    return ()=> unsubscribe();
  },[]);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-40" src={LOGO} alt="logo"/>
      <div>
        { user && (
        <div className='flex p-2'>
        <img alt="usericon" src={user?.photoURL} className='w-12 h-12 bg-red' />
        <button onClick={handleSignOut} className='font-bold text-white'>(SignOut)</button>
        </div>
        )}
      </div>
    </div>
  )
}

export default Header;