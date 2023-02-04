import React from "react";
import "../../styles/layout/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

  
const Footer = (props) => {
    return (
        <footer>
    <div className="logoFooter">
        <img src="logo.png" width="80px" height="80px" alt="logo"/>
        <a href="#s1">InfoVapes</a>
     </div>
     <div className="partedos">
     <div className="iconos">
     <FontAwesomeIcon className="icon" icon={faTwitter}/>
     <FontAwesomeIcon className="icon" icon={faFacebook}/>
     <FontAwesomeIcon className="icon" icon={faEnvelope}/>
     <FontAwesomeIcon className="icon" icon={faLocationDot}/>
    </div>
     <div className="derechos">© 2023 InfoVapes. Todos los derechos reservados.</div>  
</div>
</footer>
    )
}

export default Footer;

