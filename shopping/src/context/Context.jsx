import React from 'react'
import { useState, createContext } from 'react'
import { PRODUCTS } from '../Products';

 export const Carts =  createContext()

 // get data from the Products

 function getCartdefault(){
    let cart = {};
    for(let i = 1; i < PRODUCTS.length + 1; i++){
        cart[i]=0
    }

    return cart
     

 }

const Context = ({children}) => {
    const [cartItems, setCartItems]= useState(getCartdefault())


    /// AddToCart 

    function AddToCart(ItemId){
        setCartItems((prev)=> ({...prev, [ItemId]: prev[ItemId] + 1 }))
    }


    //RemoveFromCart

    
    function RemoveFromCart(ItemId){
        setCartItems((prev)=> ({...prev, [ItemId]: prev[ItemId] - 1 }))
    }


    ///Update the value
    function updateCart(newAmount, ItemId){
        setCartItems((prev) => ({...prev, [ItemId]: newAmount}))

    }

    // Get the subTotal
    function getTotalAmount(){
        let TotalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let Iteminfo = PRODUCTS.find((product)=> product.id ===Number(item));
                TotalAmount += cartItems[item] * Iteminfo.Price
            }
        }

        return TotalAmount;
    }

    console.log(cartItems)

    const createCart = {cartItems, AddToCart, RemoveFromCart,updateCart,getTotalAmount}
  return (
    <Carts.Provider value={createCart}>{children}</Carts.Provider>
  )
}

export default Context

