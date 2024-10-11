import React from 'react'
import Regla from '../assets/components/regla.jsx';
import "../assets/styles/Reglas.css";

function Conjunto_Reglas() {
  return (
    <div className="contenedor">
      <h1 className='seccion_reglas'>1.  Objetivo y Participación
      </h1>
       <div className="contenedor_reglas">
<Regla regla="Objetivo" descripcion="Recolectar la mayor cantidad de botellas reciclables para ayudar el medio ambiente y comprar beneficios para el colegio.

"></Regla>

<Regla regla=" Participación" descripcion=" Todos los cursos de la institución pueden participar. Es decir del grado inferior de 6° hazta el grado superio que es 11° pueden participar.


"></Regla>
      <h1 className='seccion_reglas'>2. Reglas de Recolección

      </h1>

<Regla regla="Límite de botellas" descripcion="Cada curso tiene un límite de 50 botellas por día. Esto con el fin de no saturar a los encargados del conteo. Si es priemra vez que participan deveran seguir los pasos del administrador del evento.

"></Regla>

<Regla regla="Identificación de botellas" descripcion= {<p>Cada botella debe ser aplastada para ahorar espacio y en una bolsa con un papelito con la siguiente información del curso:
<br />- Curso (A, B, C, D, E...)
<br />- Grado
<br />- Nombre del estudiante encargado de la recolección


</p> }></Regla>

<h1 className='seccion_reglas'>3. Almacenamiento y Recolección

      </h1>

<Regla regla="Almacenamiento" descripcion="Las botellas recolectadas deben ser almacenadas en una bolsa etiquetada con el nombre del curso y grado.


"></Regla>

<Regla regla="Centros de recolección" descripcion= "Se designarán centros de recolección específicos para depositar las bolsas con las botellas."></Regla>
   
<h1 className='seccion_reglas'>4. Ranking y Ganadores

</h1>

<Regla regla="Actualización de rankings" descripcion="El ranking se actualizará cada semana. Por motivos de no tener una base de datos. Los datos se registraran manualmente por un administrador de la web."></Regla>

<Regla regla="Publicación de ganadores" descripcion= 'Los ganadores serán publicados en la sección "Últimos Ganadores" de la página principal.'></Regla>
<Regla regla="Ranking" descripcion= 'La lista de los 7 cursos con mayor cantidad de botellas recolectadas se mostrará en la sección "Ranking".'></Regla>


<h1 className='seccion_reglas'>5. Disposiciones Generales
 


</h1>

<Regla regla="Canje de botellas" descripcion="Al finalizar el Ranking se contaran las botellas de los ganadores y seles dara el premio establesido en el Ranking. Y sera entregado al director de grupo del curso. El resto del dinero se usara como fondos para el colegio.
"></Regla>

<Regla regla="Verificación" descripcion= ' El comité organizador verificará la autenticidad de las botellas recolectadas, Usaran marcas o sellos para que no se puedan reusar las botellas.'></Regla>
<Regla regla=" Disputas" descripcion= 'Cualquier disputa será resuelta por el comité organizador. Habran medios disponibles para atencion al cliente por algun error o reclamos.'></Regla>



</div>
</div>
   



  )
}

export default Conjunto_Reglas
