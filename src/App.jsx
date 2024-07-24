import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import InicioPage from './pages/Inicio'
import NavBar from './components/Navbar';
import SobreMiPage from './pages/SobreMi';
import ProyectosPage from './pages/Proyectos';

function App() {

  return (
    <BrowserRouter>
    <NavBar/>
    <main>
      <Routes>
        <Route path='/' element={<InicioPage/>} />
        <Route path='/sobre-mi' element={<SobreMiPage/>} />
        <Route path='/proyectos' element={<ProyectosPage/>} />
      </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
