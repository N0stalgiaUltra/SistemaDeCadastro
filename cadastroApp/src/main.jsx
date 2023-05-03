import React from 'react'
import ReactDOM from 'react-dom/client'
import {Home} from './pages/Home/Home'
import { Register } from './pages/Register/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/global.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="register" element={<Register />} /> 
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
