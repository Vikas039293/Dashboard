import React from "react";
import Entries from "../Data";
import "./Monitoring.css";
import Table from "./table";
import { table2 } from "../Data";
import { useState } from "react";
import CompletedTable from "./completedTable";
import CloseAccount from "./closeAccount";
// console.log(entries);
// console.log(table2);
const trgdReason=[];
Entries.forEach(element => {
    trgdReason.push(element.triggerReason);
});
const uniqueset=new Set(trgdReason);
const trigger_reason_1=["All",...uniqueset];
const risk_level=["All","Low","High","Medium"];
const trgdReason2=[];
table2.forEach(element => {
    trgdReason2.push(element.triggerReason);
});
const uniqueset2=new Set(trgdReason2);
const trigger_reason_2=["All",...uniqueset2];

const Monitoring=()=>{
    const [entries,setEntries]=useState(Entries);
    const [searchTerm,setSearchItem]=useState('');
    const [filteredData,setFilteredData]=useState(entries);
    const [showReason,setShowReason]=useState(false);
    const [showRisk,setShowRisk]=useState(false);
    const [reasonValue,setReasonValue]=useState("All");
    const [riskValue,setRiskValue]=useState("All");
    const [showPending,setShowPending]=useState(true);
    const [triggerData,setTriggerData]=useState(trigger_reason_1);
    const handleReasonClick=()=>{
        setShowReason(!showReason);
    };
    const handlestateClick=(event)=>{
        const clickedItem=event.target.innerText;
        if(clickedItem==="Pending"){
            setEntries(Entries);
            setShowPending(true);
            setFilteredData(Entries);
            setTriggerData(trigger_reason_1);
        }
        else{
            setEntries(table2);
            setShowPending(false);
            setFilteredData(table2);
            setTriggerData(trigger_reason_2);
        }
    }
    const handleRiskClick=()=>{
        setShowRisk(!showRisk);
    }
    const handleSearch = (event)=>{
        const searchTerm= event.target.value;
        setSearchItem(searchTerm);
        const filteredData=entries.filter((entry)=>(
            Object.values(entry).some(
                (value)=>{
                    return (typeof value === 'string' && 
                    value.toLowerCase().includes(searchTerm.toLowerCase()))
                }
            )
        ));
        setFilteredData(filteredData);
    };
    const handleReasonListClick=(event)=>{
        const clickedItem=event.target.innerText;
        setReasonValue(clickedItem);
        // if(reasonValue==="All" && riskValue==="All"){
        //     setFilteredData(entries);
        // }
        // else if(reasonValue==="All"){
        //     const FilteredData=entries.filter((entry)=>(
        //         entry.risk_level===riskValue
        //     ));
        //     setFilteredData(FilteredData);
        // }
        // else if(riskValue==="All"){
        //     const FilteredData=entries.filter((entry)=>(
        //         entry.triggerReason===reasonValue
        //     ));
        //     setFilteredData(FilteredData);
        // }
        // else{
        //     const FilteredData=entries.filter((entry)=>(
        //         entry.risk_level===riskValue && entry.triggerReason===reasonValue
        //     ));
        //     setFilteredData(FilteredData);
        // }
        if(clickedItem==="All"){
            setFilteredData(entries);
        }
        else{
            const FilteredData=entries.filter((entry)=>(
                entry.triggerReason===clickedItem
            ))
            setFilteredData(FilteredData);
        }
        setShowReason(!showReason);
    }
    const handleRiskListClick=(event)=>{
        const clickedItem=event.target.innerText;
        setRiskValue(clickedItem);
        // if(reasonValue==="All" && riskValue==="All"){
        //     setFilteredData(entries);
        // }
        // else if(reasonValue==="All"){
        //     const FilteredData=entries.filter((entry)=>(
        //         entry.risk_level===riskValue
        //     ));
        //     setFilteredData(FilteredData);
        // }
        // else if(riskValue==="All"){
        //     const FilteredData=entries.filter((entry)=>(
        //         entry.triggerReason===reasonValue
        //     ));
        //     setFilteredData(FilteredData);
        // }
        // else{
        //     const FilteredData=entries.filter((entry)=>(
        //         entry.risk_level===riskValue && entry.triggerReason===reasonValue
        //     ));
        //     setFilteredData(FilteredData);
        // }
        if(clickedItem==="All"){
            setFilteredData(entries);
        }
        else{
            const FilteredData=entries.filter((entry)=>(
                entry.risk_level===clickedItem
            ))
            setFilteredData(FilteredData);
        }
        setShowRisk(!showRisk);
    }
    return (
        <>  
            <div className="heading">Monitoring</div>
            <div className="status">
                <div className="pending" style={{borderColor:showPending?'#4643ee':'transparent',color:showPending?'#4643ee':'inherit'}} onClick={handlestateClick}>Pending</div>
                <div className="completed" style={{borderColor:showPending?'transparent':'#4643ee',color:showPending?'inherit':'#4643ee'}} onClick={handlestateClick}>Completed</div>
                <div className="closeAccount">Close Account</div>
            </div>
            <div className="options">
                {/* <div className="searchBar">
                    
                </div> */}
                <input type="search" className="searchBar" placeholder="Serach..." value={searchTerm} onChange={handleSearch} />
                <div className="treason" onClick={handleReasonClick}>trigger Reason</div>
                <div className="reasonList" style={{visibility:showReason?'visible':'hidden'}}>
                    {showReason && (
                        triggerData.map((value,index)=>(
                            <div key={index} className="dropDownItem" onClick={handleReasonListClick}>{value}</div>
                        ))
                    )}
                </div>
                
                <div className="risk" onClick={handleRiskClick}> Risk level</div>
                <div className="riskList" style={{visibility:showRisk?'visible':'hidden'}}>
                    {showRisk && (
                        risk_level.map((value,index)=>(
                            <div key={index} className="dropDownItem" onClick={handleRiskListClick}>{value}</div>
                        ))
                    )}
                </div>
            </div>
            {showPending && <Table prop={filteredData}/>}
            {!showPending && <CompletedTable prop={filteredData}/>}
            {/* <CloseAccount/> */}
        </>
    );
};

export default Monitoring;