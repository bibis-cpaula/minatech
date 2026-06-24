import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import FAQ from './pages/FAQ'
import Programacao from './pages/Programacao'
import OSCS from "./pages/OSCS";
import PIX from './pages/PIX';
import Formulario from "./pages/formulario";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Programacao" element={<Programacao />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/oscs" element={<OSCS />} />
            <Route path="/formulario" element={<Formulario />} />
            <Route path="/pix" element={<PIX />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App;
