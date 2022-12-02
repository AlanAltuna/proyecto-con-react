import {NavLink} from "react-router-dom";
import React from "react";
import "../../styles/layout/Nav.css"
import "../../styles/layout/Header.css"

const button = document.querySelector('.button');
const enlaces = document.querySelector('navBar');



const Nav = (props) => {
    return (
        <nav>
<div className="navBar">
<ul>
<li><NavLink to="/" className={({isActive}) => isActive ? "Activo" : undefined }>INICIO</NavLink></li>
<li><NavLink to="/Vapes" className={({isActive}) => isActive ? "Activo" : undefined }>VAPES</NavLink></li>
<li><NavLink to="/Noticias" className={({isActive}) => isActive ? "Activo" : undefined }>NOTICIAS</NavLink></li>
<li><NavLink to="/Contacto" className={({isActive}) => isActive ? "Activo" : undefined }>CONTACTO</NavLink></li>
</ul>
</div>
        </nav>

         
    )
}

export default Nav;