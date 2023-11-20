import React from "react";
import "./Monitoring.css";
const Table=({prop})=>{
    const entries=prop;
    function riskColor(level){
        if(level==="Low"){
            return "#006540";
        }
        else if(level==="Medium"){
            return "#88670f";
        }
        return "#7d2424";
    }
    return (
        <>
            <table>
                <thead>
                    <tr style={{backgroundColor:'#f5f5f5',borderTop:'1px solid #00000030',padding:'5px 20px 5px 20px',height:'50px'}}>
                        <th>User</th>
                        <th>Risk Level</th>
                        <th>Trigger reason</th>
                        <th>In queue for</th>
                        <th>Data added on</th>
                        <th>Previously received</th>
                    </tr>
                </thead>
                <tbody>
                    {entries.map((entry,index)=>(
                        <tr key={index}>
                            <td>{entry.user} <br /> <div style={{color:'gray'}}>{entry.email}</div></td>
                            <td style={{color:riskColor(entry.risk_level)}}><span className="dot" style={{marginRight:'5px',backgroundColor:riskColor(entry.risk_level)}}></span>{entry.risk_level}</td>
                            <td>{entry.triggerReason}</td>
                            <td>{entry.inQueue}</td>
                            <td style={{color:"gray"}}>{entry.dataAdded}</td>
                            <td>{entry.prevReviewed}<br/>{entry.prevReviewed==="Yes" && <div style={{color:'gray'}}>{entry.prevReviewedDate}</div>}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Table;