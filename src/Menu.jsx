import React from 'react';
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
    <>

        <div className="menu_style">
        <NavLink exact activeClassName="active_class" to="/" > About us </NavLink> 
        <NavLink exact activeClassName="active_class" to="/services"> Services </NavLink>
        <NavLink exact activeClassName="active_class" to="/search"> Search </NavLink>
        <NavLink exact activeClassName="active_class" to="/contact" > Contact us </NavLink>
        <NavLink exact activeClassName="active_class" to="/user/sagar/kudu" > User </NavLink> { /**setting default page to /user */}
        </div>
    </>
    );
}

export default Menu;