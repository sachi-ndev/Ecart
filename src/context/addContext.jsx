// import React, { createContext,useState } from 'react'
// import { PRODUCTS } from '../products'


// export let AdContext=createContext()

// export default function AddContext({props}) {

//     const getDefaultCart =()=>{
//         let cart={}
//         for( let i =1;i<PRODUCTS.length+1;i++){
//         cart[i]=0
//     }
    
//     return cart
//     } 

//     const [cartItem,setCartItem]=useState(getDefaultCart())

//     const addCart=(itemId) =>{
//         setCartItem((prev) =>({...prev,[itemId]:prev[itemId] + 1 }))
//     }

//     const removeCart=(itemId) =>{
//         setCartItem((prev) =>({...prev,[itemId]:prev[itemId] - 1 }))
//     }

//     const contextVals={cartItem,addCart,removeCart}

//   return (
//     <div>
//         <AdContext.Provider value={contextVals}>
//             {props.children}
//         </AdContext.Provider>
        
      
//     </div>
//   )
// }
