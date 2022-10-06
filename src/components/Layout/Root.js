import Login from "../Login";
import React from "react";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import {useAuth} from "../../context/AuthContext";
import {Route, Routes} from "react-router-dom";
import {RequireOauth} from "../../helpers/RequireOauth";
import Home from "../Home";
import Collections from "../collections/Collections";
import NotFound from "../NotFound";
import NewCollection from "../collections/NewCollection";
import App from "../../App";


const Root = () => {
    const auth = useAuth()

    if (!auth.user) {
        return <Login/>
    }

    const routes = () => {
        return (
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="home" element={<RequireOauth><Home/> </RequireOauth>}>
                    <Route path="collections" element={<RequireOauth> <Collections/> </RequireOauth>}/>
                    <Route path="new-collection" element={<RequireOauth> <NewCollection/> </RequireOauth>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        )
    }

    return (
        <div id="wrapper">
            <Sidebar/>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <TopNavbar/>
                    <div className="container-fluid">
                        {routes()}
                    </div>
                </div>

            </div>

            {/* Logout Modal*/}
            <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Select "Logout" below if you are ready to end your current
                            session.
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel
                            </button>
                            <a className="btn btn-primary" href="login.html">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Root;