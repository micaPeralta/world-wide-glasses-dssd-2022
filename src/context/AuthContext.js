import {createContext, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Cookies from 'universal-cookie';


const AuthContext = createContext(null)

var globalCookie = new Cookies();

export const  AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    let navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) setUser(user)
        else  setUser(null)
    }, [])

    const login = (user) => {
        // const cookies = new Cookies();
        globalCookie.set('session-id', user.sessionId, { path: '/' });
        globalCookie.set('api-token', user.apiToken, { path: '/' });
        globalCookie.set('group-id', user.groupId, { path: '/' });

        setUser(user)
        localStorage.setItem("user", JSON.stringify(user))
    }

    const logout = () => {
        setUser(null)
        localStorage.clear()
        globalCookie.remove('api-token', { path: '/' });
        globalCookie.remove('session-id', { path: '/' });
        globalCookie.remove('group-id', { path: '/' });
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