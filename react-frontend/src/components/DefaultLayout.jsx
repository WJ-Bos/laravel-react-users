import React from 'react';
import {Link, Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../context/ContextProvider.jsx";

function DefaultLayout(props) {
  const {user,token} = useStateContext()

  if(!token){
    return <Navigate to="/login"/>
  }

  return (
    <div className="relative w-full flex bg-neutral-900">
      <aside className="w-[30%] text-white h-screen border-r-2
      border-r-neutral-800 font-sans">
        <div className="items-center relative text-md font-normal flex flex-col mt-20">
          <Link to="/dashboard"
                className="p-2 hover:bg-neutral-700 hover:text-gray-300 w-[90%] duration-300 rounded-sm mb-2">
            Dashboard
          </Link>
          <Link to="/users" className="p-2 w-[90%] hover:bg-neutral-700 hover:text-gray-300 duration-300 rounded-sm">
            Users
          </Link>
        </div>
      </aside>
      <div className="w-[70%]">
        <header className="flex items-center border-b-neutral-800 border-b-2 p-2
        h-[90px]
        text-lg text-white font-semibold font-sans justify-around">
          <div>
            Header
          </div>
          <div>
            User Info
          </div>
        </header>
        <main>
          <Outlet/>
        </main>
      </div>
    </div>
  );
}

export default DefaultLayout;
