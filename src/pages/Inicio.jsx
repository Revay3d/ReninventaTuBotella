import React from 'react'
import '../assets/styles/Inicio.css'
import Informacion_corta from '../assets/components/informacion_corta.jsx'
import { NavLink } from 'react-router-dom'; // Cambia a NavLink

function Inicio() {

  const handleLinkClick = () => {
    setMenuToggle(false); // Close the menu when a link is clicked
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <>
  
   <header>
    <div className='contenedor'>
    <div className='header_Lema'>
     <p>Botellas vacias, futuro <br></br> lleno. 
     <span className='resaltar--header'> Por un planeta <br></br> mas verde. </span> </p> 
     <button className='header_botom'><span><NavLink to="/reglas" onClick={handleLinkClick}>Participar</NavLink></span></button>
    </div>

<div className='informacion-empresa'>


   <img className="informacion-empresa__img" src="img/Logo.webp" alt="" />
   <div className="informacion-empresa__redes-sociales">
           <a href="https://www.instagram.com/reinvetatubotella?igsh=YzljYTk1ODg3Zg==" target="_blank">   <i  className="fa-brands fa-instagram"> </i> </a>
           <a  href="https://www.tiktok.com/@reinvetatubotella1?_t=8qRAlOmPyTN&_r=1" target="_blank">  <i className="fa-brands fa-tiktok"> </i> </a>
           <a href="https://www.facebook.com/profile.php?id=61567089778178" target="_blank"> <i className="fa-brands fa-facebook"></i> </a>
        
        
          </div>
   
    </div>
    </div>
   </header>
   <div className='contenedor'>
   <main>
<div className='informaciones_cortas'>
   <Informacion_corta 
  titulo="¿Quiénes somos?"
  descripcion={
    <>
      <p>
        Somos un grupo de estudiantes <span className='resaltar'>comprometidos con el medio ambiente</span> y la <span className='resaltar'>sostenibilidad</span>.
        <br></br><br></br>
        A través del proyecto <span className='resaltar'>"Reinventa tu botella"</span>, buscamos transformar la manera en que percibimos y gestionamos los <span className='resaltar'>residuos plásticos</span> en nuestra comunidad educativa.
        <br></br><br></br>
        Fomentamos la <span className='resaltar'>participación activa</span> y la <span className='resaltar'>conciencia ambiental</span> entre todos los miembros de nuestra institución.
      </p>
    </>
  }
  img="emojione-monotone_recycling-symbol"
/>


<Informacion_corta 
  titulo="¿Qué te ofrecemos?"
  descripcion={
    <>
      <p>
        Te ofrecemos la oportunidad de ser parte de una <span className='resaltar'>competencia divertida y educativa</span> donde podrás contribuir al reciclaje de botellas plásticas.
        <br></br><br></br>
        Además, al participar, tendrás la posibilidad de ganar <span className='resaltar'>premios emocionantes</span> para tu curso, así como contribuir a mejoras en la institución.
        <br></br><br></br>
        También ofrecemos <span className='resaltar'>talleres y charlas</span> sobre la importancia del reciclaje y la sostenibilidad.
      </p>
    </>
  }
  img="mdi_crown_1"
  tipo="secundario"
/>



<Informacion_corta 
  titulo="¿En qué te beneficia?"
  descripcion={
    <>
      <p>
        Tu participación no solo ayuda a <span className='resaltar'>reducir los residuos plásticos</span>, sino que también fomenta un <span className='resaltar'>sentido de comunidad</span> y <span className='resaltar'>trabajo en equipo</span>.
        <br></br><br></br>
        Además, aprenderás sobre la <span className='resaltar'>importancia del reciclaje</span> y cómo tus acciones pueden tener un <span className='resaltar'>impacto positivo</span> en el medio ambiente.
        <br></br><br></br>
        ¡Juntos podemos hacer la diferencia y crear un <span className='resaltar'>futuro más sostenible</span>!
      </p>
    </>
  }
  img="mingcute_pig-money-fill"
/>

</div>
</main>

<h1 className='secciones'>ULTIMOS GANADORES</h1>
<div className='clasificacion'>

  <div className='clasificacion__puesto'>
    <img className='puesto__corona' src="icons/corona_primerpuesto.svg" alt="" />
    <samp className='puesto__sombra'></samp>
    <span className='puesto__numero'>#1</span>
    <div className='puesto__datos'>
      <h1 className='datos__curso'>None</h1>
      <p className='datos_premion'>Premio de $00.000mil</p>
    </div>
  </div>

<div className='clasificacion__secundaria'>
  <div className='secundaria__puesto'>
    <span className='secundaria__numero'>#2</span>
    <div className='secundaria__datos'>
      <h1 className='datos__curso'>None</h1>
      <p className='datos_premion'>Premio de $00.000mil</p>
    </div>
    </div>

    <div className='secundaria__puesto tercerpuesto'>
    <span className='secundaria__numero'>#3</span>
    <div className='secundaria__datos'>
      <h1 className='datos__curso'>None</h1>
      <p className='datos_premion'>Premio de $00.000mil</p>
    </div>
    </div>
  </div>
  <button className='header_botom'><span><NavLink to="/ranking" onClick={handleLinkClick}>Ver Ranking</NavLink></span></button>

  </div>

  </div>

   </>
  )
}

export default Inicio
