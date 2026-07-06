import { useState } from 'react'
import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import FAQ from './pages/FAQ'
import Programacao from './pages/Programacao'
import OSCS from "./pages/OSCS";
import PIX from './pages/PIX';
import Formulario from "./pages/Formulario";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Programacao" element={<Programacao />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/oscs" element={<OSCS />} />
            <Route path="/formulario" element={<Formulario />} />
            <Route path="/pix" element={<PIX />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
