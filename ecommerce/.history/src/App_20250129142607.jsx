import React, { createContext, useState } from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Product from './components/Product'
import Contact from './components/Contact'
import Login from './components/Login'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Registration from './components/Registration'
import Authentication from './components/Authentication'

// import Pracctise from './components/Pracctise'

const context = createContext();


const App = () => {
  const [count, setCount] = useState(0);


  const addtoCart = () => {
    setCount(prevcount => prevcount + 1)
  }
  const x = 234;


  return (
    <div>
      <context.Provider value={{ addtoCart, count }}>
        <Header count={count} />
        <Routes>
          <Route path='/cart' element={<Cart />} />
          <Route path='/' element={<Home />} />

          <Route path='/product' element={<Authentication Component=<Product /> />} />

          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />




        </Routes>
      </context.Provider>

      {/* <Pracctise /> */}


      {/* <Footer /> */}
    </div >
  )
}

export default App;
export { context };
