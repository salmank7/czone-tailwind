import React from 'react'
import Home from './components/Home/Home'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import BasicOutlet from './components/BasicOutlet'
import { navLinks } from './constants'
import Laptops from './components/Products/Laptops'




const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<BasicOutlet />}>
    <Route index element={<Home/>}/>
    <Route path='/cart' element={<Cart />}/>
    { navLinks.map((nav, index)=> (
      <Route path={nav.id} element={`${nav.title}`}/>
    )) }
    </Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App