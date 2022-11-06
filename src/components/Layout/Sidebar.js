import React from "react";
import "./Sidebar.css";

import {SidebarData} from "../../helpers/SidebarData";
import {NavLink} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";
import {BsBoxArrowInLeft, BsEyeglasses} from "react-icons/bs";
import {AuthService} from "../../services/LoginService";

function Sidebar() {
    const auth = useAuth();

    const handleLogout = () => {
        AuthService.logout()
            .then(response => auth.logout())
            .catch(response => console.log(response))
    }

    return (
        <ul className="navbar-nav bg-gradient-info sidebar sidebar-dark accordion" id="accordionSidebar">

            { /*Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center">
                <div className="sidebar-brand-icon rotate-n-15">
                    <BsEyeglasses size={40}/>
                </div>
                <div className="sidebar-brand-text mx-3">WorldWide Glasses
                </div>
            </a>

            {/* Divider */}
            <hr className="sidebar-divider my-0"/>

            {/* Nav Item - Dashboard */}
            {SidebarData.map((val, key) =>
                <li className="nav-item active" key={key}>
                    <NavLink id={"title"} className="nav-link" to={val.link}>
                        {val.icon}
                        <span style={{marginLeft: 9}}>{val.title}</span>
                    </NavLink>
                </li>
            )}


            <li className="nav-item active">
                <a className="nav-link" onClick={handleLogout}>
                    <BsBoxArrowInLeft size={23}/>
                    <span style={{marginLeft: 9}}>Logout</span>
                </a>
            </li>


        </ul>
    );
}

export default Sidebar;