import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import OSCS from "./pages/OSCS";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oscs" element={<OSCS />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
