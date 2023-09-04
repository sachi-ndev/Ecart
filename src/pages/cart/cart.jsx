import React, { useContext } from 'react'
import { ShopContext } from '../../context/shopContext'
import './cart.css'
import Cartbuttons from './cartbuttons'



export default function   Cart() {

  const cart = useContext(ShopContext)
  
  // let cartarray=[...cart.cartItem]
  // let armap=cartarray.map((e)=>{
  //   return e.price
  // })     
  // console.log(armap);
  

  return (
    <div>
      <h1>Cart </h1>
      {
        cart.cartItem.map(e=>(
          <div className="mainc">
          <div className='strmainc'>
          <div className='strdivc'>
          <img className='proimagec' src={e.image} alt="" /> 
          <div className='cartleft'>
          <h1 className='protextc probrandc'>{e.brand}</h1>
          <h6 className='protextc pronamec'>{e.name}</h6>
          <h2 className='protextc propricec'>₹{e.price}</h2>
          <Cartbuttons addprice={e.price} addqty={e.qty} totprice={e.newprice} itemid={e.id}/>
          </div> 
          </div> 
        </div>
        </div>
        
        ))
      }
      {/* <h1>സഹീർ ഈ സൈറ്റിന്റെ ഐശ്വര്യം </h1> */}
{}
    </div>
  )
}


