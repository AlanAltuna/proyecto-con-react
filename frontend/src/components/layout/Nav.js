import {NavLink} from "react-router-dom";
import React from "react";
import "../../styles/layout/Nav.css"

const Nav = (props) => {
    return (
        <nav>
<div className="navBar">
<ul>
<li><NavLink activeClassName="activo" exact to="/">INICIO</NavLink></li>
<li><NavLink activeClassName="activo" exact to="/Vapes">VAPES</NavLink></li>
<li><NavLink activeClassName="activo" exact to="/Noticias">NOTICIAS</NavLink></li>
<li><NavLink activeClassName="activo" exact to="/Contacto">CONTACTO</NavLink></li>
</ul>
</div>
        </nav>
    )
}

export default Nav;