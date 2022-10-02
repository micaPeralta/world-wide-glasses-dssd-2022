import {createContext, useContext, useEffect, useState} from "react";


const AuthContext = createContext(null)

export const  AuthProvider = ({children}) => {
    const [token, setToken] = useState({});

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token"))
        if (token) setToken(token.token)
    }, [])

    const login = (token) => {
        setToken(token)
        let storedToken = {"token": token}
        localStorage.setItem("token", JSON.stringify(storedToken))
    }

    const logout = () => {
        setToken(null)
        localStorage.setItem("token", {})
    }

    return (
        <AuthContext.Provider value={{user: token, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}