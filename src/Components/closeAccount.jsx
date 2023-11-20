import React from "react";
import "./Monitoring.css"
const CloseAccount=()=>{
    return(
        <>
            <div className="card">
                <div className="heading">Close account</div>
                <label for="userId">Email:</label>
                <input type="email" name="" id="userId" />
                <label htmlFor="Reason">Reason</label>
                <input type="text" name="" id="Reason" />
                <label htmlFor="Note">Note</label>
                <input type="" name="" id="Note" />
                <input type="checkbox" name="" id="Charge" />
                <label htmlFor="charge"></label>
                <button>Close Account</button>
            </div>
        </>
    );
}

export default CloseAccount;