import React from "react";
import "../../styles/layout/Header.css";

const Header = (props) => {
    return (
        <header>
        <div className="logo">
           <img src="logo.png" width="80px" height="80px" alt="logo" className="logoHeader"/>
           <a href="#s1">InfoVapes</a>
        </div>
        <div class="button" >
        <button class="ham" type="button">
    <span class="bar-1"></span>
    <span class="bar-2"></span>
    <span class="bar-3"></span>
</button>
</div>
        </header>
    )
}

export default Header;