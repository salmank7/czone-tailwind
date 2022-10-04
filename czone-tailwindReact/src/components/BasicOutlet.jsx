import React from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer'
import Header from './header/Header'
import Upperspace from './Upperspace'

const BasicOutlet = () => {
  return (
    <>
    <Header />
    <Upperspace />
    <Outlet />
    <Footer />    
    </>
  )
}

export default BasicOutlet