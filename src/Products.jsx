import React from 'react'
import Navbar from "./Navbar";
import Navbarside from "./Navbarside";
import ProductsList from "./ProductsList";
import './products.css'

const Products = () => {
  return (
    <div class="product">
    <Navbar />
    <div className="product-container">
      <Navbarside />
      <div className="products">
      <h1 className='productheading'>Products</h1>        
        <ProductsList />                                  
      </div>
    </div>

  </div>
  )
}

export default Products