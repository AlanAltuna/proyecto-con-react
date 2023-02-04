import React from "react";

const NovedadItem = (props) => {
    const {title, subtitle, imagen, body} = props;

    return (
        <div className="novedades">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <img src={imagen} alt="vap"></img>
            <div dangerouslySetInnerHTML={{ __html: body }} ></div>
            <hr></hr>
        </div>
    );
}

export default NovedadItem;