import React from "react"
import { useEffect,useState } from "react"

const AuthContext=React.createContext({
    isLoggedIn:false,
    onLogin:(email,password)=>{},
    onLogout:()=>{}
})

export const AuthContextProvider=(props)=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(()=>{
  
      if(localStorage.getItem('isLoggedIn')==='1')
      {
        setIsLoggedIn(true)
      }
    },[])
  
    const handleLogin = () => {
      localStorage.setItem('isLoggedIn','1')
      setIsLoggedIn(true)
    }
  
    const handleLogout = () => {
      localStorage.removeItem('isLoggedIn')
      setIsLoggedIn(false)
    }

    return (
        <AuthContext.Provider
          value={{
            isLoggedIn: isLoggedIn,
            onLogin: handleLogin,
            onLogout: handleLogout,
           }}
        >
          {props.children}
        </AuthContext.Provider>
      );
}

export default AuthContext