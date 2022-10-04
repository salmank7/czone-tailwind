import React from 'react'
import styles from '../styles'

const NewsLatter = () => {
  return (
    <div className='bg-blue-3'>
        <div className={`${styles.pattern} grid text-enter sm:grid-cols-2 md:grid-cols-3 gap-y-2 py-4 text-white`}>
            <div className='sm:border-r-[3px] text-center sm:text-left sm:border-blue-1 py-2 mr-5'>
            <div className='border py-2 px-4 rounded-lg hover:bg-yellow-1 group transition-all duration-400 inline ' >
                <i className="fab fa-facebook-f group-hover:text-blue-1"></i>
            </div>
            </div>
            <div className='flex items-center mx-auto sm:mx-0 space-x-4 text-[1.5rem] flex-1'>
            <i className="fa-solid fa-newspaper"></i>
            <p>SIGN UP FOR NEWSLETTER</p>
            </div>
            <div className='flex-1 flex items-center mx-auto sm:mx-0 justify-between pl-2 w-[100%] bg-white'>
                <input placeholder='Enter Your Email' className='text-blue-1 text-[12px] border-none bg-transparent outline-none py-[0.5rem]' type="text" name="email" id="email" />
                <a href="#" className='bg-yellow-1  flex items-center space-x-2 px-2 py-[0.75rem]  text-blue-4 '><span>SUBSCRIBE</span>
                <i className='fas fa-arrow-right'></i></a>
            </div>
        </div>
    </div>
  )
}

export default NewsLatter