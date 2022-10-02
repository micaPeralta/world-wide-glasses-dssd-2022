import {useAuth} from "../context/AuthContext";
import React from "react";
import {Navigate} from "react-router-dom";


export const RequireOauth = ({children}) => {
    const  auth = useAuth()

    if (!auth.user) {
        return <Navigate to={"/"} />
    }

    return children
}