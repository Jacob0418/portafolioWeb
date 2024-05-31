import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import InicioPage from './components/pages/Inicio';
import NavBar from './components/navbar/navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<InicioPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
