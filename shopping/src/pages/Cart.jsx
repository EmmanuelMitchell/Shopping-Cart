import React, { useContext } from 'react'
import { PRODUCTS } from '../Products'
import { Carts } from '../context/Context'
import { CardcartItems } from '../component/CardcartItems'

const Cart = () => {
    const {cartItems, getTotalAmount} = useContext(Carts)

    let TotalAmount = getTotalAmount()
  return (
    <div>
        <div className='container'>
            {PRODUCTS.map((product)=> {
                if(cartItems[product.id] !==0){
                 
                    return  <CardcartItems  data={product}/>
                }
})}
        </div>

        <div>
            <h4 className='subtitle'>subTotal: {TotalAmount}</h4>

            <button className='check'>Continueing Shopping</button>
            <button className='check'>Checkout</button>
        </div>
    </div>
  )
}

export default Cart