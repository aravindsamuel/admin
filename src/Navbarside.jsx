import React , {useState} from 'react'
import "./navbar.css"
import SpaceDashboardSharpIcon from '@mui/icons-material/SpaceDashboardSharp';
import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';
import Inventory2SharpIcon from '@mui/icons-material/Inventory2Sharp';
import PaymentSharpIcon from '@mui/icons-material/PaymentSharp';
import NotificationsActiveSharpIcon from '@mui/icons-material/NotificationsActiveSharp';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from "react-router-dom";
import * as Ai from 'react-icons/ai'


const Navbarside = () => {
  const [sidebar, setsidebar] = useState(false);
  const showsidebar = () => {
      setsidebar(!sidebar)
  }
  return (
    <>
    <Ai.AiOutlineMenu className='navbartoggleicon' onClick={showsidebar}/>
    <div class={sidebar ? "sidebottom" : "showsidebottom"}>
        <ul>
            <Link to="/" style={{textDecoration:"none"}} className="routerlink">
            <li><SpaceDashboardSharpIcon className="icon"/><span>Dashboard</span></li>
            </Link>
            <Link to="/users" style={{textDecoration:"none"}} className="routerlink">
            <li><AccountBoxSharpIcon className="icon" /><span>Users</span></li>
            </Link>
            <Link to="/products" style={{textDecoration:"none"}} className="routerlink">
            <li><Inventory2SharpIcon className="icon" /><span>Products</span></li>
            </Link>
            <Link to="/orders" style={{textDecoration:"none"}} className="routerlink">
            <li><PaymentSharpIcon className="icon" /><span>Orders</span></li>
            </Link>
            <Link to="/notification" style={{textDecoration:"none"}} className="routerlink">
            <li><NotificationsActiveSharpIcon className="icon" /><span>Notifications</span></li>
            </Link>
            <li><SettingsIcon className="icon" /><span>Settings</span></li>
        </ul>
    </div>
    </>
  )
}

export default Navbarside