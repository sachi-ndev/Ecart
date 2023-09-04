import React from 'react'
import {Link} from 'react-router-dom'
// import {} from 'phos'
import { Heart, ShoppingCart} from "@phosphor-icons/react";
import './navbar.css'


export default function Navbar() {
  return (
    <div className='navbar'>
      <h1 style={{color:'white'}}>SaheZon <span style={{color:'orange'}}>  </span></h1>
        <div className="links">
            <Link to='/' className='obj shp'> Shop</Link>
            <Link to='/cart' className='obj'> <ShoppingCart size={32} color='red'/></Link>
            <Link to='/thenks'> <Heart size={42} fill='red'/></Link>
            
        </div>
    </div>
  )
}
