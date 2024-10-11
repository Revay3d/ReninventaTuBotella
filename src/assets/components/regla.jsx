import React from 'react'
import './styles/regla.css'

function reglas(props) {
  return (
   
    <div className="regla">
    <h1>{props.regla}</h1>
    <p>{props.descripcion}</p>
    </div>

  )
}

export default reglas
