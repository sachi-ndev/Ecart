import React, { useContext } from 'react'
import './structure.css'
import { ShopContext } from '../context/shopContext'

export default function Struture(props) {
    // console.log(props.data.brand);
    const {id,brand,name,price,image}=props.data

    const {addCart}=useContext(ShopContext)

  return (
    <div className="main">
    <div className='strmain'>
      <div className='strdiv'>
      <img className='proimage' src={image} alt="" />  
      <h1 className='protext probrand'>{brand}</h1>
      <h6 className='protext proname'>{name}</h6>
      <h2 className='protext proprice'>₹{price}</h2>
      <button className='addbtn' onClick={() => addCart(props.data)}>Add to Cart</button>
      {/* <button className='addbtn'>Add to Cart</button> */}
      {/* <button >ADD</button> */}
      </div> 
    </div>
    </div>
  )
}
