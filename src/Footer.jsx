import React from 'react'
import { Link } from 'react-router-dom';
function Footer() {
  return (
   <footer>
    <div className='footer__informacion'>
        <div className='informacion__logo'>
        <img src="img/LogoNormal.webp" alt="LogoReinvetaTuBotella" />
        <h1>REINVENTA <br></br>TU BOTELLA</h1>
        </div>

        <p className='informacion__lema'>Botellas vacias, futuro lleno. <span className='resaltar'>Por un <br></br> planeta mas verde. </span></p>

        <div className='informacion__redes'>
        <a href="https://www.instagram.com/reinvetatubotella?igsh=YzljYTk1ODg3Zg==" target="_blank">   <i  className="fa-brands fa-instagram"> </i> </a>
           <a  href="https://www.tiktok.com/@reinvetatubotella1?_t=8qRAlOmPyTN&_r=1" target="_blank">  <i className="fa-brands fa-tiktok"> </i> </a>
           <a href="https://www.facebook.com/profile.php?id=61567089778178" target="_blank"> <i className="fa-brands fa-facebook"></i> </a>
          
       
        </div>
        <p className='informacion__creditos'>Copyright © 2024 ReinventaTuBotella. Todos los derchos casi reservados.</p>
    </div>

<div className='footer__contenedor'>
    <div className='contenedor__directo'>
        <h1 className='directo__titulo'>Control Web</h1>
        <ul className='directo__links'>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="ranking">Ranking</Link></li>
        <li><Link to="reglas">Reglas</Link></li>
        <li><Link to="creditos">Créditos</Link></li>


        </ul>
    </div>

    <div className='contenedor__directo'>
        <h1 className='directo__titulo'>Comunidad</h1>
        <ul className='directo__links'>
            <li> <a href="https://www.instagram.com/reinvetatubotella?igsh=YzljYTk1ODg3Zg==" target="_blank">Instagram</a></li>
            <li>  <a  href="https://www.tiktok.com/@reinvetatubotella1?_t=8qRAlOmPyTN&_r=1" target="_blank">TikTok</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=61567089778178" target="_blank">Facebook</a></li>



        </ul>
    </div>
    </div>
   </footer>
  )
}

export default Footer
