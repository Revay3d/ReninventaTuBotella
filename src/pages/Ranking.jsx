import React from 'react'
import "../assets/styles/Ranking.css";

function Ranking() {
  return (
    <div className='contenedor'>
   <div className='contenedor__ranking'>
   <h1 className='ranking__titulo'>Ranking Semanal y Premios</h1>
   <p className='ranking__descripcion'>
   Cada semana, nuestro ranking se actualiza para reflejar el rendimiento de los participantes. 
   <br />    <br />Los premios se distribuyen de la siguiente manera:
    <ul>
        <li><span class="resaltar">Primer Puesto:</span> Recibe el <span class="resaltar">doble</span> de lo generado. Por ejemplo, si el primer puesto generó 20, ganará 40.</li>     <br />
        <li><span class="resaltar">Segundo Puesto:</span> Obtiene la <span class="resaltar">mitad del doble</span> del primer puesto. Si el segundo generó 20, ganará 30.</li>  <br />   
        <li><span class="resaltar">Tercer Puesto:</span> Gana la <span class="resaltar">mitad del doble</span> del segundo puesto. Así, si el tercer puesto generó 20, recibirá 25.</li>
    </ul>

    <p class="resaltar">¡Compite cada semana y maximiza tus ganancias!</p>
   </p>
    
    <div className='ranking'>
    <div className='ranking__tabla'>
      <table>
        <thead>
          <tr>
            <th>N°</th>
            <th>Curso</th>
            <th>N. Botella</th>
          </tr>
        </thead>
        <tbody>
          <tr className='primerPuesto'>
            <td>#1</td>
            <td>None</td>
            <td>0000000</td>
          </tr>
          <tr className='segundoPuesto'>
            <td>#2</td>
            <td>None</td>
            <td>0000000</td>
          </tr>
          <tr className='tercerPuesto'>
            <td>#3</td>
            <td>None</td>
            <td>0000000</td>
          </tr>

          <tr>
            <td>#4</td>
            <td>None</td>
            <td>0000000</td>
          </tr>

          <tr>
            <td>#5</td>
            <td>None</td>
            <td>0000000</td>
          </tr>

          <tr>
            <td>#6</td>
            <td>None</td>
            <td>0000000</td>
          </tr>

          <tr>
            <td>#7</td>
            <td>None</td>
            <td>0000000</td>
          </tr>

        
      
        </tbody>
      </table>
    </div>
    </div>
   </div>
    </div>
  )
}

export default Ranking
