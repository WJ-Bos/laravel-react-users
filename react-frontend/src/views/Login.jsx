import React, {useState} from 'react';
import { Link } from 'react-router-dom'

function Login(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmail("");
    setPassword("");
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div className="flex flex-col bg-neutral-900 h-screen items-center justify-evenly text-white relative">
      <h1 className="text-4xl font-semibold max-w-[450px]">Hi there <span className="waving-hand">👋🏻</span></h1>
      <form
        className="flex w-[90%] relative flex-col sm:w-[90%] md:w-[70%] lg:w-[50%] rounded-sm p-6 border-white border-[1px] border-opacity-60 shadow-bottom-right shadow-neutral-500 mb-10">
      <div className="flex flex-col mb-4">
          <h1 className="font-bold text-2xl pt-2 pl-3">Sign In</h1>
          <label className="font-normal text-xs pl-3 text-neutral-400 mt-[4px]">Sign in to an existing account</label>
        </div>
        <div className="mt-4 flex flex-col">
          <label className="relative text-md ml-3 text-white font-semibold mb-[2px]">Email</label>
          <input
            className="w-[90%] ml-3 h-8 rounded-sm p-2 mb-2 bg-neutral-900 border-white border-[1px] border-opacity-60"
            type="text"
            value={email}
            onChange={handleEmailChange}/>
        </div>
        <div className="mt-2 flex flex-col">
          <label className="relative font-semibold ml-3 text-md text-white mb-[2px]">Password</label>
          <input
            className="w-[90%] ml-3 h-8 rounded-sm order-white border-[1px] border-opacity-60 p-2 mb-2 bg-neutral-900"
            type="password"
            value={password}
            onChange={handlePasswordChange}/>
        </div>
        <div className="flex justify-center">
          <button
            className="p-2 w-[80px] bg-white font-semibold text-black rounded-md sm:w-[100px] text-sm mt-10 mb-2 hover:bg-neutral-300 duration-300"
            onClick={handleSubmit}>Sign In
          </button>
        </div>
        <p className='text-center p-3 text-neutral-500 text-lg'> Not Registered ? <Link to="/signup" className="p-3 text-white">Create an account</Link></p>
      </form>
    </div>
  );
}

export default Login;
