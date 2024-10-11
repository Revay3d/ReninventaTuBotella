import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Nav from './nav.jsx';
import Inicio from './pages/Inicio.jsx';
import Ranking from './pages/Ranking.jsx';
import Reglas from './pages/Reglas.jsx';
import Creditos from './pages/Creditos.jsx';
import Error from './pages/404.jsx';
import Mantenimiento from './pages/Mantenimiento.jsx';
import Footer from './Footer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index path='*' element={<Error />} />
        <Route index path='/' element={<Inicio />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/reglas" element={<Reglas />} />
        <Route path="/creditos" element={<Mantenimiento />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
