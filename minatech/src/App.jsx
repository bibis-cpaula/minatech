import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import FAQ from './pages/FAQ'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Programacao from './pages/Programacao'
import OSCS from "./pages/OSCS";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Programacao" element={<Programacao />} />
            <Route path="/oscs" element={<OSCS />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App;
