import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "./views/Login.jsx";
import SignUp from "./views/SignUp.jsx";
import Users from "./views/Users.jsx";
import NotFound from "./views/NotFound.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import Dashboard from "./views/Dashboard.jsx";

const router = createBrowserRouter([

  //when a User is Signed in
  {
    path: "/",
    element: <DefaultLayout/>,
    children: [
      {
        path: "/",
        element: <Navigate to="/users"/>
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/users",
        element: <Users/>
      }
    ]
  },
  //When a User is Not signed in
  {
    path: "/",
    element: <GuestLayout/>,
    children: [
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/signup",
        element: <SignUp/>
      }
    ]
  },
  {
    path: "*",
    element: <NotFound/>
  }
])

export default router;
