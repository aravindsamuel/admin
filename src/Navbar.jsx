import React from "react";
import NotificationsActiveSharpIcon from '@mui/icons-material/NotificationsActiveSharp';
import "./navbar.css"
import { Link } from "react-router-dom";



const Navbar = () => {
    return (
        <>
        <div class="navbar">
            <div class="wrapper">
            <div class="sidetop"><span class="logo">Admin Dashboard</span></div>
                <div class="items">
                    <Link to="/notification">
                    <div class="item">
                        <NotificationsActiveSharpIcon className="icon notifyicon" />
                        <div class="counter">1</div>
                    </div>
                    </Link>
                    <div class="item">
                        <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg" 
                        alt=""
                        class="avatar" />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Navbar;