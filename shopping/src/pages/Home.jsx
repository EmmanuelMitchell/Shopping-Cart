import React from 'react'
import { PRODUCTS } from '../Products'
//import Products from '../Products'
import Product from '../component/Product'


const Home = () => {
  return (
    <div>


        <h1>Mitchell Store</h1>
        <div className='container'>
        {PRODUCTS.map((product) =>(
            <Product data={product}  key={product.id} />
        ))}
        </div>
    </div>
  )
}

export default Home