import "./Navbar.css";
import avatar from "../../assets/avatar.png";

import React from 'react'

function Navbar({sidebarOpen, openSidebar}) {
    return (
        <nav className="navbar">
        <div className="nav_icon" onClick={() => openSidebar()}>
            <i className="fa fa-bars"></i>
        </div>
        <div className="navbar__left">
            <a href="https://health.fuse.io/">Network Status</a>
            <a href="https://explorer.fuse.io/accounts">Accounts</a>
            <a className="active_link" href="https://explorer.fusenet.io/">Explorer</a>
        </div>

        <div className="navbar__right">
           
            <a>
                <img width="30" src={avatar} alt="avatar"/>
            </a>
        </div>
        </nav>
    )
}
export default Navbar;