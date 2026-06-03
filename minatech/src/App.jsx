import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import FAQ from './pages/FAQ'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>

        <main>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/FAQ" element={<FAQ />} />
          </Routes>


        </main>
      </BrowserRouter>
    </>
  )
}

export default App
