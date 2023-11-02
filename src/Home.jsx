import React from "react";
import Navbar from "./Navbar";
import Navbarside from "./Navbarside";
import Widgets from "./Widgets";
import Featured from "./Featured";
import Chart from "./Chart";

import "./home.css"


const chartdata = [
  {name:'Jan', Total:1200},
  {name:'Feb', Total:2000},
  {name:'Mar', Total:1800},
  {name:'Apr', Total:3000},
  {name:'May', Total:4900},
  {name:'Jun', Total:3700},
  {name:'Jul', Total:6200},
  {name:'Aug', Total:2100},
  {name:'Sep', Total:4700},
  {name:'Oct', Total:2050},
  {name:'Nov', Total:5500},
  {name:'Dec', Total:7200}
]



const Home = () => {
    return (
        <div class="home">
          <Navbar />
          <div className="home-container">
            <Navbarside />
            <div className="dashboard">
              <div className="widget-container">
              <Widgets type="user"/>
              <Widgets type="order"/>
              <Widgets type="earning"/>
              <Widgets type="balance"/>
              </div>
              <div className="charts">
                <Featured />
                <Chart data={chartdata} classNa="chart" aspect={2/1} title='Last 12 months revenue'/>
              </div>                           
            </div>
          </div>

        </div>
    );
}

export default Home;
