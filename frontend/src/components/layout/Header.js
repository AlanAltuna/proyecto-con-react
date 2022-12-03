import React from "react";
import "../../styles/layout/Header.css";

const Header = (props) => {
    return (
        <header>
        <div className="logo">
           <img src="logo.png" width="80px" height="80px" alt="logo" className="logoHeader"/>
           <a href="#s1">InfoVapes</a>
        </div>
        </header>
    )
}



export default Header;