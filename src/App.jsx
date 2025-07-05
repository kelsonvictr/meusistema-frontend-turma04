import React from 'react'
import FornecedorForm from './pages/Fornecedor/FornecedorForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicial from './pages/Inicial'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/cadastrar-fornecedor" element={<FornecedorForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App