import React from 'react'
import Home from './pages/public/Home'
import About from './pages/public/About'
import Contact from './pages/public/Contact'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Authpage from './pages/public/Authpage'

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Authpage" element={<Authpage />} />
    </Routes>
   </BrowserRouter>
   
  )
}

export default App