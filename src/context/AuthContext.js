import {createContext, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {CookieUtils} from "../helpers/CookieUtils";


const AuthContext = createContext(null)


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    let navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) setUser(user)
        else setUser(null)
    }, [])

    const login = (user) => {
        CookieUtils.set(CookieUtils.B_SESSION_ID, user.sessionId)
        CookieUtils.set(CookieUtils.B_TOKEN, user.apiToken)
        CookieUtils.set(CookieUtils.B_GROUP_ID, user.groupId)
        CookieUtils.set(CookieUtils.P_TOKEN, user.providerToken)

        setUser(user)
        localStorage.setItem("user", JSON.stringify(user))
    }

    const logout = () => {
        setUser(null)
        localStorage.clear()
        CookieUtils.remove(CookieUtils.B_SESSION_ID)
        CookieUtils.remove(CookieUtils.B_TOKEN)
        CookieUtils.remove(CookieUtils.B_GROUP_ID)
        CookieUtils.remove(CookieUtils.P_TOKEN)
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