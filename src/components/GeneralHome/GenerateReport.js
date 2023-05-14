import React, {useState} from "react"
import "../css/GenerateReport.css"

export default function GenerateReport(props) {
    return(
        <button
            className="generateReport"
            // style = {{backgroundColor: props.allComplete ? "#DD0895" : "grey"}}
            onClick={props.onClick}
        >
            {/* {props.allComplete ? "GENERATE COMPLETION REPORT" : "REPORT UNAVAILABLE"} */}
            GENERATE COMPLETION REPORT
        </button>
    )
}