import React, { useEffect, useState } from 'react'
import Navbar from "./Navbar";
import Navbarside from "./Navbarside";
import './singleuser.css'
import { UserRows } from './datatablesource';
import { useParams } from 'react-router-dom';
import Chart from './Chart';

const getUserDetailById = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const UserData = UserRows;

  const foundUser = UserData.find((user) => user.id === parseInt(id));

  return foundUser || null;
}

const SingleUser = () => {
  const {id} = useParams();
  const [UserDetails, setUserDetails] = useState(null);

  useEffect(() => {
    getUserDetailById(id)
    .then((data) => {
      setUserDetails(data)
    })
    .catch((error) => {
      console.log("Error:", error);
    })
  }, [id]);

  if(!UserDetails) {
    return <div className='loading'>Loading...</div>
  }

  return (
    <div class="singleuser">
    <Navbar />
    <div className="single-user-container">
      <Navbarside />
      <div className="single-user">
      <div className="singletop">
            <div className="singleleft">
              <h1 className="singletitle">User Information</h1>
              <div className="singleitem">
                <img
                  className="singleuserimg"
                  src={UserDetails.img}
                  alt="User_Image"
                />
                <div className="details">
                  <h1 className="detailstitle">{UserDetails.username}</h1>
                  <table className='singleuser-table'>
                    <tr>
                        <td className='userdetails'>Email:</td>
                        <td className='userdetails'>{UserDetails.email}</td>
                    </tr>
                    <tr>
                        <td className='userdetails'>Phone:</td>
                        <td className='userdetails'>{UserDetails.phone}</td>
                    </tr>
                    <tr>
                        <td className='userdetails'>Address:</td>
                        <td className='userdetails'>{UserDetails.address}</td>
                    </tr>
                    <tr>
                        <td className='userdetails singleusertable'>Country:</td>
                        <td className='userdetails'>{UserDetails.country}</td>
                    </tr>
                  </table>
                  
                </div>
              </div>
            </div>
            <div className="singleright">
              <Chart data={UserDetails.chartdata} classNa="userchart" aspect={1/.25} title="User Spending (Last 12 Months)"/>
            </div>
          </div>



        
        
                                 
      </div>
    </div>

  </div>
  )
}

export default SingleUser