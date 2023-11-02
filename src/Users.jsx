import React from 'react'
import Navbar from "./Navbar";
import Navbarside from "./Navbarside";
import UsersList from "./UsersList";
import './users.css'

const Users = () => {
  return (
    <div class="user">
    <Navbar />
    <div className="user-container">
      <Navbarside />
      <div className="users">
      <h1 className='userheading'>Users</h1>        
        <UsersList />                                  
      </div>
    </div>

  </div>
  )
}

export default Users