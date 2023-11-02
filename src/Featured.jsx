import React from "react";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./featured.css";

const Featured = () => {
    return(
        <div className="featured">
            <div className="top">
                <h1 className="feattitle">Total Revenue</h1>
                <MoreVertOutlinedIcon fontSize="small" />
            </div>
            <div className="featbottom">
                <div className="featuredchartcontainer">
                <CircularProgressbar value={70} text="70%" strokeWidth={5} fontSize="small" />
                </div>
            <p className="featbtmtitle">Total sales made today</p>
            <p className="featamount">₹ 700</p>
            <p className="featdesc">Previous transactions processing. Last payments may not be included.</p>
            <div className="summary">
                <div className="featitem">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownIcon fontSize="small" />
                        <div className="resultamount">₹ 13.7k</div>
                    </div>
                </div>
                <div className="featitem">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpIcon fontSize="small" />
                        <div className="resultamount">₹ 13.7k</div>
                    </div>
                </div>
                <div className="featitem">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpIcon fontSize="small" />
                        <div className="resultamount">₹ 13.7k</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Featured;