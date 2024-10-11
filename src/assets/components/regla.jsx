import React from 'react'
import './styles/Regla.css'

function reglas(props) {
  return (
   
    <div className="regla">
    <h1>{props.regla}</h1>
    <p>{props.descripcion}</p>
    </div>

  )
}

export default reglas
