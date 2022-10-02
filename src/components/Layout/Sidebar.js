import React from "react";
import "./Sidebar.css";

import {SidebarData} from "../../helpers/SidebarData";
import {NavLink} from "react-router-dom";

function Sidebar() {

    return (
        <div className="Sidebar">
            <ul className="SidebarList">
                {SidebarData.map((val,key) => {
                    return (
                        <li key={key} className="row">
                            <div id={"icon"}>{val.icon}</div>
                            <NavLink id={"title"} to={val.link}>{val.title}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Sidebar;