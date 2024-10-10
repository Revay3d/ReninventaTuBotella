// No cambiar o quitar nada de este archivo importante



import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './nav.jsx'
import Inicio from './pages/Inicio.jsx'
import Ranking from './pages/Ranking.jsx'
import Reglas from './pages/Reglas.jsx'
import Creditos from './pages/Creditos.jsx'
import Error from './pages/404.jsx'
import Mantenimiento from './pages/Mantenimiento.jsx'
import Footer from './Footer.jsx'




import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <BrowserRouter>
    <Nav/>
    <Routes scrollBehavior="smooth">
      <Route index path='*' element={<Error/>} ></Route>
<Route index path='/' element={<Inicio/>}></Route>
<Route path="/ranking" element={<Mantenimiento/>}></Route>
<Route path="/reglas" element={<Mantenimiento/>}></Route>
<Route path="/creditos" element={<Mantenimiento/>}></Route>


    </Routes>
    <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
