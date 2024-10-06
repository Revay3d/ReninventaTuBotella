import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./assets/styles/Nav.css";

function Nav() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [scroll, setScroll] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 120);
    };

    window.addEventListener('scroll', handleScroll);

    // No olvides limpiar el evento
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
    <nav>
      <img src="img/LogoRB.svg" alt="ReinventaTuBotella" />

      <ul className={`nav__menu ${menuToggle ? 'active' : ''}`}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="ranking">Ranking</Link></li>
        <li><Link to="reglas">Reglas</Link></li>
        <li><Link to="creditos">Créditos</Link></li>
      </ul>

      <span className={`menu--toggle ${menuToggle ? 'mostrar_x' : ''}`} onClick={() => setMenuToggle(!menuToggle)}>
        <span className='barra1'></span>
        <span className='barra2'></span>
        <span className='barra3'></span>
      </span>
    </nav>
      <div className={`nav__menu--fondo ${scroll ? 'nav--scroll' : ''} ${menuToggle ? 'active-fondo' : ''}`}></div>
    </>
  );
}

export default Nav;
