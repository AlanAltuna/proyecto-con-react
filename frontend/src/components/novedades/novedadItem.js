import React from "react";

const NovedadItem = (props) => {
    const {title, subtitle, imagen} = props;

    return (
        <div className="novedades">
            <h1>{title}</h1>
            <div className="imgg"><img src={imagen} alt="vap" id="imagenN"></img></div>
            <h3>{subtitle}</h3>
        </div>
    );
}

export default NovedadItem;