import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Habitos from './pages/habitos'
import LoginPage from './pages/login'

function App() {

  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<LoginPage  /> } />
      <Route path='/:tela' element={<LoginPage /> } />
      <Route path='/habitos' element={<Habitos tela={"habitos"}/> } />
      <Route path='/hoje' element={<Habitos tela={"hoje"}/>} />
      <Route path='/historico' element={<Habitos tela={"historico"}/>} />
    </Routes>
    
    </BrowserRouter>
  );
  
}

export default App
