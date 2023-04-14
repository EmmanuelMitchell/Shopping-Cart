import React from 'react'
import { Carts } from '../context/Context'
import { useContext } from 'react'

export const CardcartItems = (props) => {
    const {AddToCart, RemoveFromCart, cartItems, updateCart} = useContext(Carts)
    const {id, Name, Price, ProductImage } = props.data
  return (
    <div className="product-card">
      <img src={ProductImage} alt={Name} className="product-image" />
      <div className="product-info">
        <h2 className="product-title">{Name}</h2>
        <p className="product-price">{Price}</p>
          <button onClick={()=> {RemoveFromCart(id)}}>-</button>
          <input className='input-btn' value={cartItems[id]} onChange={(e)=> updateCart(Number(e.target.value), id)} />
          <button onClick={()=>{AddToCart(id)}}>+</button>
      </div>
    </div>
  )
}
