import {createContext, useContext, useState} from "react";

/**
 * This component provides context for the whole application.
 * The context contains the user data and the access token.
 * This context is used by the components that need to access the user data and the access token.
 *
 * The context is updated by the components that fetch the user data and the access token.
 */

const StateContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
})

export const ContextProvider = ({children}) => {
  const [user, setUser] = useState({});
  const[token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

  const setToken =(token) =>{
    _setToken(token);
    if(token){
      localStorage.setItem("ACCESS_TOKEN", token);
    }else{
      localStorage.removeItem("ACCESS_TOKEN");
    }
  }

  return(
    <StateContext.Provider value={{
      user,
      token,
      setUser,
      setToken
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);

