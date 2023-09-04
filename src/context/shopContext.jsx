import React, { createContext, useState } from 'react'
// import { PRODUCTS } from '../products'


 const ShopContext =createContext();

  const ShopContextProvider = ({children}) => {

    // const getDefaultCart =()=>{
    //     let cart={}
    //     for( let i =1;i<PRODUCTS.length+1;i++){
    //     cart[i]=0
    // }
    // return cart
    // } 

    const [cartItem,setCartItem]=useState([])

    
    const addCart=(itemId) =>{
        setCartItem((prev) =>([...prev,itemId]))
    }
    // const removeCart=(itemId) =>{
    //     setCartItem((prev) =>([...prev, ]))
    // }
    //  const contextVals={cartItem,addCart,removeCart}

 const contextVals={cartItem,addCart}
 console.log(cartItem);
 

  return (

    <ShopContext.Provider value={contextVals}>
        {children}
    </ShopContext.Provider>
  )
}

export {ShopContextProvider,ShopContext}
