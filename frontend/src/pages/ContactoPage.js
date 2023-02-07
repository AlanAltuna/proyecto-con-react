import React, { useState } from 'react';
import "../styles/pages/ContactoPage.css";
import axios from "axios";


const Contacto = (props) => {

const initialForm = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
}

const [sending, setSending] = useState(false);
const [msg, setMsg] = useState('');
const [formData, setFormData] = useState(initialForm);

const handleChange = e => {
    const {name, value} = e.target;
    setFormData(oldData => ({
        ...oldData,
        [name]: value
    }));
}

const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true)
    const response= await
    axios.post('http://localhost:3000/api/Contacto', formData);
    setMsg (response.data.message);
    if (response.data.error === false) {
        setFormData(initialForm)
    }
}




    return (
        <div className="formulario">
            <img src="foto3.jpg" alt="portada4" width="100%" height="100%" className="fotoPortada"/>

    <form className="form1" action="/Contacto" method="post" onSubmit={handleSubmit}>
      
        <input type="text" placeholder="NOMBRE" class="fdos" name="nombre" value={formData.nombre} onChange={handleChange}/>
       
        <input type="text" placeholder="E-MAIL" class="fdos" name="email" value={formData.email} onChange={handleChange}/>
       
        <input type="text" placeholder="TELEFONO" class="fdos" name="telefono" value={formData.telefono} onChange={handleChange}/>
        
        <textarea class="ftres" name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
       
        <input type="submit" class="enviar" value="Enviar"/>
    </form>
    {sending ? <p>Enviando..</p> : null}
        {msg ? <p>{msg}</p> : null}
</div>

    )
}

export default Contacto;