/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Coin from "./pages/Coin"
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/coin/:coinId' element={<Coin/>} />
      </Routes>
      <Footer/>

      
    </div>
  )
}

export default App
