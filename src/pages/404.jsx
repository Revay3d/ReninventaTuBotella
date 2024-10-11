import React from 'react'
import { Link } from 'react-router-dom';
import Flash from '../assets/components/Flash';
import "../assets/styles/Error.css";

export default function Error() {
  return (
   <>
    <div className='caja__error'>
    <div className='error' >
        <Flash Tipo="error"/>
      <p className='error__mensaje'>404</p>
      <p className='error__descripcion'>Upps... Parese que este sitio no esta disponibles o no exite.</p>
      < Link to="/" >  <button className='error__botom'>Volver al Inicio</button> </Link>
    </div>
    </div>


</>
  )
}