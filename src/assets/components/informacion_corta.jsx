import React from 'react'
import './styles/informacion_corta.css'
function Informacion_corta(props) {
  return (
<div className={`informacion informacion--${props.tipo}`}>
  <div>
<h1 className='informacion__titulo'>{props.titulo}</h1> 
<p className='informacionn__texto'>{props.descripcion}
</p>

</div>

<div className='informacion_imagen'>
<img src={`icons/${props.img}.webp`} alt="" />
<span></span>
</div>
</div>

  )
}

export default Informacion_corta
