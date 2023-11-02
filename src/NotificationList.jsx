import React from 'react'
import './notificationlist.css'

const NotificationList = ({message, time}) => {
  return (
    <div className='notification-container'>
        <div>
            <p className='notification-content'>{message}</p>
        </div>
        <div>
            <p className='notification-time'>{time}</p>
        </div>        
    </div>
  )
}

export default NotificationList