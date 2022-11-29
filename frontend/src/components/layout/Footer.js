import React from "react";

const Footer = (props) => {
    return (
        <footer>
    <div className="logo">
        <img src="logo.png" width="80px" height="80px" alt="logo"/>
        <a href="#s1">InfoVapes</a>
     </div>
     <div className="partedos">
     <div className="iconos">
     <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-regular fa-at"></i>
    </div>
     <div class="derechos">© 2022 InfoVapes. Todos los derechos reservados.</div>
    
</div>
</footer>
    )
}

export default Footer;

