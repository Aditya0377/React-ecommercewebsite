import React, { createContext, useState } from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Product from './components/Product'
import Contact from './components/Contact'
import Login from './components/Login'
import Footer from './components/Footer'
import Cart from './components/Cart'

import Pracctise from './components/Pracctise'

const context = createContext();


const App = () => {
  const [count, setCount] = useState(0);


  const addtoCart = () => {
    setCount(prevcount => prevcount + 1)
  }
  const x = 234;

  return (
    <div>
      <Header count={count} />
      <Routes>
        <Route path='/cart' element={<Cart />} />
        <Route path='/' element={<Home />} />
        <context.Provider value={addtoCart}>
          <Route path='/product' element={<Product />} />
        </context.Provider>
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />



      </Routes>
      {/* <context.Provider value={count}>
        <Pracctise />
      </context.Provider> */}

      <Footer />
    </div>
  )
}

export default App;
export { context };
