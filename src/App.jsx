import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Nav from "./components/Nav.jsx"
import './App.css'

export default function App() {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Nav />
      <div className='p-10 text-center'>
        
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
} 