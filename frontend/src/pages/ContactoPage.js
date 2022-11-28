import React from "react";

const Contacto = (props) => {
    return (
        <div className="formulario">
    <form className="form1">
        <label><input type="name" placeholder="NOMBRE" class="fdos" /></label>
        <label><input type="email" placeholder="E-MAIL" class="fdos"/></label>
        <label><input  placeholder="ASUNTO" class="fdos" /></label>
        <label><input type="text"  class="ftres" /></label>
        <label><input type="submit" /></label>
    </form>
</div>

    )
}

export default Contacto;