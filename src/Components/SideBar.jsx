import React from "react";
import "./SideBar.css";
const SideBar=()=>{
    return(
        <>
        <div className="box">
            <div className="logo">
                <img src="https://th.bing.com/th/id/OIP.qH_PNRfLic83tLdETz6ZGQAAAA?w=233&h=159&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" style={{height:'90px',width:'150px'}}/>
            </div>
            <ul>
                <li>Overview</li>
                <li>Onboarding</li>
                <li style={{backgroundColor:'#ededfe',color:'#4643ee',borderRadius:'5px'}}>Monitoring</li>
                <li>Flagging</li>
                <li>Source of Income</li>
                <li>UAR</li>
            </ul>
            <div className="profile">
                <div style={{display:'flex',flexDirection:'row'}}>
                    <div>
                        <img src="https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?w=199&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" style={{height:'40px',width:'40px'}}/>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',paddingLeft:'5px'}}>
                        <div className="name" style={{fontWeight:'bold'}}>Elon Musk</div>
                        <div className="email">elon@twitter.com</div>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    );
};
export default SideBar;