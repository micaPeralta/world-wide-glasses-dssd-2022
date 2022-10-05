import "./App.css";
import {AuthProvider} from "./context/AuthContext";
import React from "react";
import Root from "./components/Layout/Root";

function App() {
    return (
        <AuthProvider>
           <Root/>
        </AuthProvider>
    );
}

export default App;
