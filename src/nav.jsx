import React from 'react'
import { Link } from 'react-router-dom'
import "./assets/styles/Nav.css"

function nav() {
  return (
    <nav>
      <h1>RB</h1>

      <ul>
        <li> <Link to="/"> Inicio </Link></li>
        <li> <Link to="ranking"> Ranking </Link></li>
        <li> <Link to="reglas"> Reglas </Link></li>
        <li> <Link to="creditos"> Creditos </Link></li>



      </ul>
    </nav>
  )
}

export default nav
