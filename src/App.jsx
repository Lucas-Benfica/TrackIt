import { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Habitos from './pages/habitos'
import LoginPage from './pages/login'

function App() {




  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<LoginPage page={"login"} /> } />
      <Route path='/cadastro' element={<LoginPage page={"cadastro"}/> } />
      <Route path='/habitos' element={<Habitos /> } />
      <Route path='/hoje' element={<Habitos />} />

    </Routes>
    
    </BrowserRouter>
  )
}

export default App
