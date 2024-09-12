import React, {useState} from 'react';

function Login(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);

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
    <div className="flex bg-neutral-900 h-screen items-center justify-center text-white relative">
      <form
        className="flex w-[60%] relative flex-col sm:max-w-[40%] md:max-w-[40%] lg:max-w-[40%] rounded-sm p-2 border-white border-[1px] border-opacity-60 shadow-bottom-right shadow-neutral-500">
        <div className="flex flex-col mb-4">
          <h1 className="font-bold text-xl pt-2 pl-3">Sign In</h1>
          <label className="font-normal text-xs pl-3 text-neutral-400">Sign in to an existing account</label>
        </div>
        <div className="mt-4 flex flex-col">
          <label className="relative text-sm ml-3 text-white font-semibold mb-[2px]">Email</label>
          <input
            className="w-[90%] ml-3 h-8 rounded-sm p-2 mb-2 bg-neutral-900 border-white border-[1px] border-opacity-60"
            type="text"
            value={email}
            onChange={handleEmailChange}/>
        </div>
        <div className="mt-2 flex flex-col">
          <label className="relative font-semibold ml-3 text-sm text-white mb-[2px]">Password</label>
          <input
            className="w-[90%] ml-3 h-8 rounded-sm order-white border-[1px] border-opacity-60 p-2 mb-2 bg-neutral-900"
            type="password"
            value={password}
            onChange={handlePasswordChange}/>
        </div>
        <div className="flex justify-center">
          <button
            className="p-2 w-[80px] bg-white font-semibold text-black rounded-md sm:w-[100px] text-sm mt-6 mb-2 hover:bg-neutral-300 duration-300"
            onClick={handleSubmit}>Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
