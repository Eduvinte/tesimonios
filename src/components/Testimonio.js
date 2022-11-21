import '../hojas-de-estilos/Testimonio.css';
import React from 'react';


function Testimonio(props){
    return (
        <div className='contenedor-testimonio'>
            <img src={require(`../imagenes/${props.imagen}.jpg`)} className='imagen-testimonio' alt='Foto de Carla' />
        <div className='contenedor-texto-testimonio'>
            <p className='nombre-testimonio'>{props.nombre}</p>
            <p className='cargo-testimonio'>{props.cargo}</p>
            <p className='texto-testimonio'>{props.testimonio}</p>
        </div>
        </div>
    );
}

export default Testimonio;