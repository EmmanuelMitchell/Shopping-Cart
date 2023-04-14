import React, { useContext } from 'react'
import { Carts } from '../context/Context'
import './store.css'




const Product = (props) => {

    const {AddToCart, cartItems} = useContext(Carts)

    const {id, Name, Price, ProductImage } = props.data

    let cartAmount = cartItems[id]
  return (
    <div className="product-card">
      <img src={ProductImage} alt={Name} className="product-image" />
      <div className="product-info">
        <h2 className="product-title">{Name}</h2>
        <p className="product-price">${Price}</p>
        <button onClick={()=> {AddToCart(id)}} className='addToCart'>Add To Cart
         {cartAmount > 0 && <>({cartAmount})</> }
         </button>
      </div>
    </div>
  )
}

export default Product