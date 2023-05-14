import React from "react"
import "../css/Table.css"


export default function SOP(props) {
    
    return(
        <tr className="tableRowItems" key={props.id}>
            <td className="tableCell">{props.title}</td>
            <td className="tableCell" style={{textAlign: "center"}}>
                <button 
                    onClick={props.onClick}
                    className="smallButton"
                    style={{backgroundColor: props.status ? "#7ED957": "#DD0895", color: "white"}}
                >
                    {props.status ? "COMPLETED" : "INCOMPLETE"} 
                </button>
            </td>             
            <td className="tableCell" style={{textAlign: "center"}}>{props.completionDate}</td>
        </tr>
    )
}

