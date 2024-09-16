import React, {useRef, useState} from 'react';
import {Link} from "react-router-dom";
import users from "./Users.jsx";
import axiosClient from "../axios-client.js";
import {useStateContext} from "../context/ContextProvider.jsx";

function SignUp(props) {

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef =useRef();
  const confirmPasswordRef =useRef();

  const  {setUser,setToken} = useStateContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirm_password: confirmPasswordRef.current.value
    }
    axiosClient.post('signup',payload)
      .then(({data}) =>{
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) =>{
        const response = err.response;
        if(response && response.status === 422){ //422 validation error
         console.log( response.data.errors);
        }
      })
  }

  return (
    <div className="flex bg-neutral-900 h-screen items-center justify-center text-white relative">
      <form
        className="flex w-[60%] relative flex-col sm:max-w-[40%] md:max-w-[40%] lg:max-w-[40%] rounded-sm p-4 border-white border-[1px] border-opacity-60 shadow-bottom-right shadow-neutral-500">
        <div className="flex flex-col mb-4">
          <h1 className="font-bold text-xl pt-2 pl-3">Sign Up</h1>
          <label className="font-normal text-xs pl-3 text-neutral-400 mt-[4px]">Create a new account</label>
        </div>
        <div className="mt-4 flex flex-col">
          <label className="relative text-sm ml-3 text-white font-semibold mb-[2px]">Name</label>
          <input
            ref={nameRef}
            className="w-[90%] ml-3 h-8 rounded-sm p-2 mb-2 bg-neutral-900 border-white border-[1px] border-opacity-60"
            type="text"
          />
        </div>
        <div className="mt-2 flex flex-col">
          <label className="relative font-semibold ml-3 text-sm text-white mb-[2px]">Email</label>
          <input
            ref={emailRef}
            className="w-[90%] ml-3 h-8 rounded-sm order-white border-[1px] border-opacity-60 p-2 mb-2 bg-neutral-900"
            type="text"
          />
        </div>
        <div className="mt-2 flex flex-col">
          <label className="relative font-semibold ml-3 text-sm text-white mb-[2px]">Password</label>
          <input
            ref={passwordRef}
            className="w-[90%] ml-3 h-8 rounded-sm order-white border-[1px] border-opacity-60 p-2 mb-2 bg-neutral-900"
            type="password"/>
        </div>
        <div className="mt-2 flex flex-col">
          <label className="relative font-semibold ml-3 text-sm text-white mb-[2px]">Confirm Password</label>
          <input
            ref={confirmPasswordRef}
            className="w-[90%] ml-3 h-8 rounded-sm order-white border-[1px] border-opacity-60 p-2 mb-2 bg-neutral-900"
            type="password"/>
        </div>
        <div className="flex justify-center">
          <button
            className="p-2 w-[80px] bg-white font-semibold text-black rounded-md sm:w-[100px] text-sm mt-6 mb-2 hover:bg-neutral-300 duration-300"
            onClick={handleSubmit}>Save
          </button>
        </div>
        <p className='text-center pr-2 text-neutral-500 text-lg'> Already Registered ? <Link to="/login"
                                                                                             className="pl-2 text-white">Sign
          in .</Link></p>
      </form>
    </div>
  );
}

export default SignUp;
