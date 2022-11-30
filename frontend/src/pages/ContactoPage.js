import React from "react";
import "../styles/pages/ContactoPage.css"
const Contacto = (props) => {
    return (
        <div className="formulario">
            <img src="foto3.jpg" alt="portada4" width="100%" height="100%" className="fotoPortada"/>
    <form className="form1">
        <label><input type="name" placeholder="NOMBRE" class="fdos" required/></label>
        <label><input type="email" placeholder="E-MAIL" class="fdos" required/></label>
        <label><input  placeholder="ASUNTO" class="fdos" required/></label>
        <label><input type="text"  class="ftres" required/></label>
        <label><input type="submit" class="enviar"/></label>
    </form>
</div>

    )
}

export default Contacto;