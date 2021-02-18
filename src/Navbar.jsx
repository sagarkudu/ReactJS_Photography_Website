import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../src/images/bhavesh-LOGO1.png"

export const Navbar = () => {
    return (
        <>
            <div className ="container-fluid nav-bg">
                <div className="row">
                <div className = "col-10 mx-auto">
                    {/**put you code here to properly set menu */}
                        <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                        
                                <NavLink exact className="navbar-brand" to="/">
                                    <img src={logo} alt="logo" height="55px" width="165px"></img></NavLink>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                            
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <NavLink  exact activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
                                            </li>
                                            
                                            <li className="nav-item">
                                                <NavLink  exact activeClassName="menu_active" className="nav-link" to="/services">Services</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink  exact activeClassName="menu_active" className="nav-link"  to="/gallery">Gallery</NavLink>
                                            </li>            
                                            <li className="nav-item">
                                                <NavLink  exact activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
                                            </li>
                                            {/* <li className="nav-item">
                                                <NavLink  exact activeClassName="menu_active" className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                            </li> */}
                                        </ul>   
                                     </div>
            </div>
            </nav>
                </div>
            </div>
            </div>
   
        </>
    );
}

export default Navbar;