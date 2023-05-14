import React, { useState } from "react";

import GeneralHomeData from "../../data/GeneralHomeData"
import "../css/Table.css"
import SOP from "./SOP";
import moment from "moment/moment";
import BigButton from "../BigButton";

function GeneralHomeTable() {
    const [completedSOP, setCompletedSOP] = useState(GeneralHomeData)
    
    function handleCompletedSOP(id) {
        window.confirm('Edit Completion Date?\n \nMarking as "COMPLETE" will set date to the current date.\nMarking as "INCOMPLETE" will delete the date.')
        
        let date = moment()

        setCompletedSOP(prevStatus => {
            return prevStatus.map((el) => {
                let currentDate = el.status ?  "" : date.format("MM/DD/YYYY")
                return el.id === id ? {...el, status: !el.status, completionDate: currentDate } : el
            })
        })
    }

    function handleGenerateReport() {
        window.confirm('PDF of Report opened in new window')
    }

    const SOPElements = completedSOP.map((sop) => (
        <SOP 
            id={sop.id}
            key={sop.id}
            status={sop.status}
            title={sop.title}
            completionDate={sop.completionDate}
            onClick={() => handleCompletedSOP(sop.id)}
        />
    ))

    return (
        <div>
            <div className="buttonWrap">
                <BigButton onClick={handleGenerateReport} text="GENERATE COMPLETION REPORT"/>
            </div>
        <table className="table">
            <thead className="tableRowHeader">
            <tr>
                <th className="tableHeader">SOP Name</th>
                <th className="tableHeaderStatus">Status</th>
                <th className="tableHeader" style={{textAlign: "center"}}>Completion Date</th>
            </tr>
            </thead>
            <tbody>
                {SOPElements}
            </tbody>
        </table>
        </div>
    );
};

export default GeneralHomeTable