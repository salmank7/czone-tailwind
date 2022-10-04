import React from 'react'
import Links from './Links'
import styles from '../../styles'
import { navLinks } from '../../constants'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='bg-blue-3'>
        <div className={`${styles.pattern} flex items-center justify-between`}>
            <ul className='hidden sm:flex text-white uppercase text-[.5rem] md:text-[.9rem]'>
                {
                    navLinks.map((nav, index)=> (
                        <li key={nav.id} className={`transition-all border-r-[0.01px] border-black hover:bg-blue-1 py-4`} >
                            <Link to={nav.id} className="px-4 py-3">{nav.title}</Link>
                        </li>
                    ))
                }
            </ul>
            <a href="#" className='text-white hidden sm:block text-[1rem] hover:text-blue-1'>
            <i className='fab fa-facebook-f'></i>
            </a>
        </div>
        </div>
    
    </div>
  )
}

export default Navbar