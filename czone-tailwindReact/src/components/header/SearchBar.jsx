import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/Images/header-logo.png"
import styles from "../../styles"
import { BsFillCartFill } from 'react-icons/bs'
import { navLinks } from '../../constants'
import Laptops from '../Products/Laptops'

const SearchBar = () => {
 const [toggle, setToggle] = useState(false);



  return (
    <div className='bg-blue-2 py-4 relative'>
    <div className={`${styles.pattern} flex items-center justify-between`}>
      <Link to={"/"}>
      <img src={Logo} alt="LOGO" className='rounded-sm h-[45px]' />
      </Link>
      <div className='flex items-center space-x-4 justify-end'>
        <div className='bg-white rounded-sm w-[600px] items-center justify-between h-[38px] hidden sm:flex'>
        <input type="text" placeholder='search entire store here' className='w-[50%] text-[14px] text-gray-500 h-[38px] border-none bg-transparent p-1 outline-none' />
        <div className='h-[38px] bg-white-2 w-[50%] flex items-center jusify-end'>
          <div className='px-3 w-[100%]'>
        <select name="categories" id="categories" className='text-blue-1 w-[100%] text-[12px]  bg-white-2 h-[38px] border-[0] outline-[0] rounded-sm font-bold'>
          <option value="laptop" className='font-bold'>Laptops</option>
          <option value="laptop" className='font-bold'>CPUs</option>
          <option value="laptop" className='font-bold'>Ram</option>
          <option value="laptop" className='font-bold'>Monitors</option>
          <option value="laptop" className='font-bold'>SSDs</option>
          <option value="laptop" className='font-bold'>Laptops</option>
          <option value="laptop" className='font-bold'>CPUs</option>
          <option value="laptop" className='font-bold'>Ram</option>
          <option value="laptop" className='font-bold'>Monitors</option>
          <option value="laptop" className='font-bold'>SSDs</option>
          <option value="laptop" className='font-bold'>Laptops</option>
          <option value="laptop" className='font-bold'>CPUs</option>
          <option value="laptop" className='font-bold'>Ram</option>
          <option value="laptop" className='font-bold'>Monitors</option>
          <option value="laptop" className='font-bold'>SSDs</option>
        </select>
          </div>
        <i className='fas fa-search px-4 rounded-sm bg-yellow-1  p-[0.67rem]'></i>
        </div>
        </div>
        <Link to={"./cart"} className="relative">
          <BsFillCartFill  className='bg-transparent text-white text-[1.875rem]'/>
          <span className='absolute top-[-0.5rem] right-[-0.75rem] bg-black text-[12px] text-white w-6 h-6 rounded-full flex items-center justify-center'>0</span>
        </Link>
        <i className='fas fa-bars bg-transparent text-white text-[1.875rem] block sm:hidden hover:text-yellow-1 transition-all' onClick={() => setToggle(!toggle)}
        ></i>
      </div>
    </div>
    <ul className={`${toggle ? "right-[0%]" : "right-[-600%]"} 'block sm:hidden transition-all top-[100%] duration-500 absolute w-[100%]  bg-blue-3 text-white uppercase text-[1rem]`}>
                {
                    navLinks.map((nav, index)=> (
                        <li key={nav.id} className="transition-all hover:bg-blue-1 ">
                        <Link to={nav.id} className="py-2 px-4 block">{nav.title}</Link>
                        </li>
                    ))
                }
            </ul>
    </div>
  )
}

export default SearchBar