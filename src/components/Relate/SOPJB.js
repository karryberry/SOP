import React from "react"
import SmallButton from "../SmallButton"
import "../css/Table.css"

export default function SOPJB({sopjb, handleDelete}) {
        
    return(
            <tr className="tableRowItems" key={sopjb.id}>
                <td className="tableCell">{sopjb.sop}</td>        
                <td className="tableCell">{sopjb.jobrole}</td>
                <td className="tableCell" style={{textAlign: "right", minWidth:"175px"}}>
                    <SmallButton onClick={handleDelete} text="DELETE" color="white" backgroundColor="#DD0895"/>
                </td>
            </tr>
    )
}

