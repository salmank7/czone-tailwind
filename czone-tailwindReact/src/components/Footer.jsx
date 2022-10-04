import React from 'react'
import styles from '../styles'
import logo from "../assets/Images/header-logo.png"
import visa from "../assets/Images/visa.png"
import NewsLatter from './NewsLatter'
import { AccountLinks, contactLinks, CorporateLinks, productLinks } from '../constants'


const Footer = () => {

  return (
   <footer>
    < NewsLatter />
    <div className='bg-blue-2 '>
      <div className={`${styles.pattern} py-8 grid gap-x-[2.8rem] space-y-1 md:space-y-0 sm:grid-cols-3 md:grid-cols-5`}>
      <div className=' space-y-4'>
        <img src={logo} alt="LOGO"  className='w-[150px]'/>
        <p className='text-white text-[0.8rem]'>Welcome to Computer Zone. Online Computer store in Pakistan. Buy Dell, Lenovo, HP, Acer laptops at the best prices in Pakistan.</p>
      </div>
     {/* footer links */}
     <div className='font-roboto'>
      <h1 className='text-white text-[1.25rem] font-bold uppercase'>Products</h1>
     <ul className='list-style-none space-y-1'>
      {
        productLinks.map((product, index)=> (
          <li key={product.id} className="">
            <a href={product.id} className="text-white text-[12px] hover:text-yellow-1 transition-all">{product.title}</a>
          </li>
        ))
      }
     </ul>
     </div>
     {/* footer links */}
     <div className='font-roboto'>
      <h1 className='text-white text-[1.25rem] font-bold uppercase'>Accounts</h1>
     <ul className='list-style-none space-y-1'>
      {
        AccountLinks.map((product, index)=> (
          <li key={product.id} className="">
            <a href={product.id} className="text-white text-[12px] hover:text-yellow-1 transition-all">{product.title}</a>
          </li>
        ))
      }
     </ul>
     </div>
     {/* footer links */}
     <div className='font-roboto'>
      <h1 className='text-white text-[1.25rem] font-bold uppercase'>corporate</h1>
     <ul className='list-style-none space-y-1'>
      {
        CorporateLinks.map((product, index)=> (
          <li key={product.id} className="">
            <a href={product.id} className="text-white text-[12px] hover:text-yellow-1 transition-all">{product.title}</a>
          </li>
        ))
      }
     </ul>
     </div>
     {/* footer links */}
     <div className='font-roboto'>
      <h1 className='text-white text-[1.25rem] font-bold uppercase'>Contact</h1>
     <ul className='list-style-none space-y-1'>
      {
        contactLinks.map((product, index)=> (
          <li key={product.id} className="">
            <a href={product.id} className="text-white text-[12px] hover:text-yellow-1 transition-all">{product.title}</a>
          </li>
        ))
      }
     </ul>
     </div>
     {/* footer links */}
      </div>
    </div>
    <div className='bg-blue-3 py-4'>
      <div className={`${styles.pattern} grid sm:grid-cols-2 md:grid-cols-3 textcenter justfy-items-center items-center space-y-2 md:space-y-0 text-white text-[12px]`}>
      <p className='mx-auto sm:self-center  sm:mx-0'>Copyright &copy; Computer Zone 2022. All Rights Reserved </p>
      <div className='flex sm:self-center  items-center space-x-1 mx-auto'>
        <img src={visa} alt="visa card pic" className='w-[45px] rounded-lg' />
        <img src={visa} alt="visa card pic" className='w-[45px] rounded-lg' />
        <img src={visa} alt="visa card pic" className='w-[45px] rounded-lg' />
        <img src={visa} alt="visa card pic" className='w-[45px] rounded-lg' />
        <img src={visa} alt="visa card pic" className='w-[45px] rounded-lg' />
      </div>
      <p className='mx-auto sm:mx-0 sm:self-center sm:place-self-end'>Powered by Webx Ecommerce ®</p>
      </div>
    </div>
   </footer>
  )
}

export default Footer