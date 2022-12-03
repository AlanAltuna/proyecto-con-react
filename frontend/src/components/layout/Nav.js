import {NavLink} from "react-router-dom";
import {useState} from "react";
import "../../styles/layout/Nav.css"
import "../../styles/layout/Header.css"
import BurguerButton from "../button.jsx"




const Nav = (props) => {

    const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
    return (
        <nav>
            <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
<div className={`navBar ${clicked ? 'active' : ''}`}>
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