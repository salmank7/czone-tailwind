import React from 'react'


const Product = (props) => {
  return (
    <div className='border-[1px] border-grey-2 flex flex-col items-center justify-center p-4'>
        <img src={props.src} alt="Product" className='w-[200px]' />
        <h2 className='text-blue-1 font-bold text-center my-2 text-[0.9rem]'>{props.title}</h2>
        <p className='text-[12px] text-grey-3'>{props.details}</p>
        <ul className='list-disc text-[12px] ml-8 text-grey-3 my-[4px] w-[100%]'>
            <li>{props.listOne}</li>
            <li>{props.listTwo}</li>
            <li>{props.listThree}</li>
            <li>{props.listFour}</li>
        </ul>
        <div className='w-[100%] text-center mt-6 border-t-[1px] py-2'>
        <h3 className='text-[1.25rem] font-bold text-black'>{props.price}</h3>
        <a href="#" className='bg-blue-4 hover:bg-blue-1 transition-all duration-400 text-white text-[0.75rem] block mt-2 p-2 space-x-4 font-bold'>
            <i className="fa fa-link"></i>
            <span>VIEW DETAIL</span>
        </a>
        </div>
    </div>
  )
}

export default Product