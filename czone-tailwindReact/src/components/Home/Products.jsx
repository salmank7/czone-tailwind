import React from 'react'
import { productDetails } from '../../constants'
import styles from '../../styles'
import Product from './Product'

const Products = () => {
  return (
    <div className='mt-[3rem] font-roboto min-h-[100vh]'>
        <div className={`${styles.pattern}`}>
            <div className='bg-grey-2 p-2'>
                <h2 className='text-[1.2rem] uppercase font-bold text-grey-3'>Featured Products</h2>
            </div>
            <div className='grid md:grid-cols-4  sm:grid-cols-3 gap-6 place-items-center mt-6'>
                {
                    productDetails.map((item, index)=> (
                        < Product key={item.id} src={item.src} title={item.id} details={item.details} listOne={item.one} listTwo={item.two} listThree={item.three} listFour={item.four} price={item.price} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Products