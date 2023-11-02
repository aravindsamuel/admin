import React from 'react'
import Navbar from "./Navbar";
import Navbarside from "./Navbarside";
import './orders.css'
import OrdersList from './OrdersList';

const Orders = () => {
  return (
    <div class="order">
    <Navbar />
    <div className="orders-container">
      <Navbarside />
      <div className="orders">
        <h1 className='orderstitle'>Orders</h1>        
        <OrdersList />
      </div>
    </div>
  </div>
  )
}

export default Orders