import React from "react";
import "./Monitoring.css";
const CompletedTable=({prop})=>{
    const entries=prop;
    // console.log(entries);
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
                        <th>Action reason</th>
                        <th>Time to close</th>
                        <th>Data added on</th>
                        <th>Action taken by</th>
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
                            <td>{entry.actionByName}<br/>{<div style={{color:'gray'}}>{entry.actionByEmail}</div>}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default CompletedTable;