import React, { useState } from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Product from './components/Product'
import Contact from './components/Contact'
import Login from './components/Login'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Pracctise from './components/Pracctise'


const App = () => {

  const [count, setCount] = useState(0);

  return (
    <div>
      <Header count={count} />
      <Routes>
        <Route path='/cart' element={<Cart />} />
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product setCount={setCount} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />



      </Routes>
      <Pracctise>
        <h1>How are you guys</h1>
      </Pracctise>
      <Footer />
    </div>
  )
}

export default App
