import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../../products';

const ShopContext=createContext()

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};


export default function Cartbuttons(props) {

  const[cartItems,setCartItems]=useState(getDefaultCart())

  
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

   const contextValue={cartItems,addToCart,removeFromCart} 
   console.log(cartItems);


  return (
    <div>
      <ShopContext.Provider value={contextValue}>
        {props.children}
      </ShopContext.Provider>


      
    </div>
  )
}





// export const ShopContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState(getDefaultCart());

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
//         totalAmount += cartItems[item] * itemInfo.price;
//       }
//     }
//     return totalAmount;
//   };

//   const updateCartItemCount = (newAmount, itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
//   };

//   const checkout = () => {
//     setCartItems(getDefaultCart());
//   };

//   const contextValue = {
//     cartItems,
//     addToCart,
//     updateCartItemCount,
//     removeFromCart,
//     getTotalCartAmount,
//     checkout,
//   };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };