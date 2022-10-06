import {createContext, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


const AuthContext = createContext(null)

export const  AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    let navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) setUser(user)
        else  setUser(null)
    }, [])

    const login = (user) => {
        setUser(user)
        localStorage.setItem("user", JSON.stringify(user))
    }

    const logout = () => {
        setUser(null)
        localStorage.clear()
        navigate("/")
    }

    return (
        <AuthContext.Provider value={{user: user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}