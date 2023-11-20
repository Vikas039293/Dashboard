import React from "react";
import "./Home.css";
import SideBar from "../Components/SideBar";
import Monitoring from "../Components/Monitoring";
const homePage=()=>{
    return(
        <div className="FullPage">
            <div className="SideBar">
                <SideBar/>
            </div>
            <div className="Main">
                <Monitoring/>
            </div>
        </div>
    );
};

export default homePage;