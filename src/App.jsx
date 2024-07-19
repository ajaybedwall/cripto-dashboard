import React from 'react'

/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Coin from "./pages/Coin"
import Footer from './components/footer/Footer'

function App() {
  

const App = () => {
  return (
    <>
    <div className='App'>

    </div>
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/coin/:coinId' element={<Coin/>} />
      </Routes>
      <Footer/>

      
    </div>
    </>

  )
}}

export default App 
