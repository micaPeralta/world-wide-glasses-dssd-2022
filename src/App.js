import Header from "./components/Layout/Header/Header"  ;

import "./App.css";
import {Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import {RequireOauth} from "./helpers/RequireOauth";
import {AuthProvider} from "./context/AuthContext";
import Collections from "./components/Collections";
import Sidebar from "./components/Layout/Sidebar";

function App() {
    return (
        <AuthProvider>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="home" element={<RequireOauth><Home/> </RequireOauth>}>
                        <Route path="collections" element={<RequireOauth> <Collections/> </RequireOauth>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
        </AuthProvider>
    );
}

export default App;
