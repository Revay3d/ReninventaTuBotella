import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom'; // Cambia a NavLink
import "./assets/styles/Nav.css";
import "./assets/styles/Footer.css";

function Nav() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 70);
      if (menuToggle) {
        setMenuToggle(false);
      }
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.menu--toggle')) {
        setMenuToggle(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuToggle]);

  const toggleMenu = () => {
    setMenuToggle(prev => !prev);
  };

  const handleLinkClick = () => {
    setMenuToggle(false); // Close the menu when a link is clicked
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <>
      <nav ref={menuRef}>
        <img src="img/LogoNormal.webp" alt="ReinventaTuBotella" />
        <ul className={`nav__menu ${menuToggle ? 'active' : ''}`}>
          <li><NavLink to="/" onClick={handleLinkClick}>Inicio</NavLink></li>
          <li><NavLink to="/ranking" onClick={handleLinkClick}>Ranking</NavLink></li>
          <li><NavLink to="/reglas" onClick={handleLinkClick}>Reglas</NavLink></li>
          <li><NavLink to="/creditos" onClick={handleLinkClick}>Créditos</NavLink></li>
        </ul>
        <span className={`menu--toggle ${menuToggle ? 'mostrar_x' : ''}`} onClick={toggleMenu}>
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
