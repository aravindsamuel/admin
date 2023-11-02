import React from 'react'
import Navbar from "./Navbar";
import Navbarside from "./Navbarside";
import './notification.css'
import NotificationList from './NotificationList';

const notifications = [
  {
    "id": 1,
    "message": "A new product has been added.",
    "time": "10:30 AM"
  },
  {
    "id": 2,
    "message": "Product 'Sample Product' is running low in stock.",
    "time": "3:45 PM"
  },
  {
    "id": 3,
    "message": "Product 'Another Product' has received a positive review.",
    "time": "12:15 PM"
  },
  {
    "id": 4,
    "message": "A product has been updated by a vendor.",
    "time": "10:20 AM"
  },
  {
    "id": 5,
    "message": "Product 'Out of Stock Product' is out of stock.",
    "time": "9:10 AM"
  },
  {
    "id": 6,
    "message": "New vendor registration received.",
    "time": "2:30 PM"
  },
  {
    "id": 7,
    "message": "Product 'Bestseller' reached 1,000 sales.",
    "time": "11:55 AM"
  },
  {
    "id": 8,
    "message": "Low inventory alert for 'High Demand Product'.",
    "time": "4:40 PM"
  },
  {
    "id": 9,
    "message": "New customer registration received.",
    "time": "10:05 AM"
  },
  {
    "id": 10,
    "message": "Product 'Featured Item' is back in stock.",
    "time": "8:15 AM"
  },
  {
    "id": 11,
    "message": "Shipping confirmation for order #12345.",
    "time": "1:30 PM"
  },
  {
    "id": 12,
    "message": "Product 'Limited Edition' is running low in stock.",
    "time": "5:20 PM"
  },
  {
    "id": 13,
    "message": "New product review submitted.",
    "time": "7:45 AM"
  },
  {
    "id": 14,
    "message": "Order #54321 has been canceled.",
    "time": "3:10 PM"
  },
  {
    "id": 15,
    "message": "Product 'Special Deal' is on sale now.",
    "time": "9:25 AM"
  },
  {
    "id": 16,
    "message": "Inventory update for 'Clearance Product'.",
    "time": "11:50 AM"
  },
  {
    "id": 17,
    "message": "New product added to clearance section.",
    "time": "6:30 PM"
  },
  {
    "id": 18,
    "message": "Order #67890 has been shipped.",
    "time": "8:50 AM"
  },
  {
    "id": 19,
    "message": "Product 'Top Seller' is now out of stock.",
    "time": "4:15 PM"
  },
  {
    "id": 20,
    "message": "New vendor registration received.",
    "time": "7:20 AM"
  }
]


const Notification = () => {
  return (
    <div class="notification">
    <Navbar />
    <div className="notifications-container">
      <Navbarside />
      <div className="notifications">
        <h1 className='notificationstitle'>Notification</h1> 
        <div className='notifycont'>{notifications.map((x) => (
          <NotificationList 
          message = {x.message}
          time = {x.time}
          />
        ))}</div> 
      </div>
    </div>
  </div>
  )
}

export default Notification