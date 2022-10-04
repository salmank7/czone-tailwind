import React from 'react'
import SubHeader from './SubHeader'
import Navbar from './Navbar'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <div className='fixed w-[100%] z-50'>
        <SubHeader />
        <SearchBar />
        <Navbar />
    </div>
  )
}

export default Header