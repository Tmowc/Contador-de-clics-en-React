import React from 'react';
import './Boton.css';

function Boton( {texto, esContadorClic, manejarClic} ) {
    return(
        <button className={esContadorClic ? "boton-contar" : "boton-reiniciar"}
        onClick={manejarClic}>{texto}</button>
    )
}

export default Boton;



