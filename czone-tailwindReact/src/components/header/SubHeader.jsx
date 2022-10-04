import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles'
import Links from './Links'

const BreadCrumb = () => {
  return (
    <div className={`${styles.boxWidth} bg-blue-1 text-white hidden sm:block`}>
        <div className={` ${styles.pattern} flex items-center justify-between py-1`}>
            <Links />
            
            <ul className="flex text-[12px] space-x-6">
                <li className='flex space-x-1 items-center'>
                  <Link to={"account"} className="space-x-2">
                  <span>My Account</span>
                  <i className="fa-solid fa-caret-down"></i>
                  </Link>
                  </li>
                <li className='flex space-x-1 items-center'><a href="#">Login</a> </li>
                <li className='flex space-x-1 items-center'><a href="#">Create Account</a> </li>
                <select name="currency" id="currency" className='text-black border-grey-1 outline-none rounded-sm'>
                    <option value="USD">USD</option>
                    <option value="pkr">PKR</option>
                    <option value="inr">INR</option>
                </select>
            </ul>
            </div>
    </div>
  )
}

export default BreadCrumb