import React from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import "./widget.css"

const Widgets = ({type}) => {
    let data;

    const amount =100;
    const diff=20;
    switch(type){
        case "user":
            data = {
                title:"USERS",
                isMoney:false,
                link:"See all users",
                icon:<PersonOutlinedIcon className="widgeticon"
                style={{backgroundColor:"purple",color:"white"}}/>
            }
            break;
        case "order":
            data = {
                title:"ORDERS",
                isMoney:false,
                link:"View all orders",
                icon:<ShoppingCartOutlinedIcon className="widgeticon"
                style={{backgroundColor:"crimson",color:"white"}}/>
            }
            break;
        case "earning":
            data = {
                title:"EARNINGS",
                isMoney:true,
                link:"View net earnings",
                icon:<CurrencyRupeeOutlinedIcon className="widgeticon"
                style={{backgroundColor:"green",color:"white"}}/>
            }
            break;
        case "balance":
            data = {
                title:"BALANCE",
                isMoney:true,
                link:"See details",
                icon:<AccountBalanceWalletOutlinedIcon className="widgeticon"
                style={{backgroundColor:"gold",color:"white"}}/>
            }
            break;
        default:
            break;
            
    }
    return (
        <div class="widget">
            <div className="left">
                <span className="widgettitle">{data.title}</span>
                <span className="widgetcounter">{data.isMoney && "₹"}{amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {diff}%
                </div>
                <div className="widgeticon">
                {data.icon}
                </div>
            </div>
        </div>
    );
}

export default Widgets;