import React from 'react'
import { Link } from 'react-router-dom';
import Flash from '../assets/components/Flash';
import "../assets/styles/Mantenimiento.css";

export default function Mantenimiento() {
  return (
   <>
    <div className='caja__mantenimiento'>
    <div className='mantenimiento' >
        <Flash Tipo="mantenimiento"/>
      <p className='mantenimiento__mensaje'>503</p>
      <p className='mantenimiento__descripcion'>Upps... En estos momentos la web esta en mantenimiento. Regresa mas tarde.</p>
      < Link to="/" >  <button className='mantenimiento__botom'>Volver al inicio</button> </Link>
    </div>
    </div>


</>
  )
}