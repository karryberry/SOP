import React from "react"
import SmallButton from "../SmallButton"
import "../css/Table.css"

export default function SOP({sop, handleDelete, handleEdit, handleOpen}) {
        
    return(
            <tr className="tableRowItems" key={sop.id}>
                <td className="tableCell" >
                    <a className="titleLink" href={sop.link} target="_blank" rel="noopener noreferrer"> {sop.title} </a>
                </td>
                <td className="tableCell" style={{textAlign: "center"}}>{sop.version}</td>        
                <td className="tableCell" style={{textAlign: "center"}}>{sop.effectiveDate}</td>
                <td className="tableCell" style={{textAlign: "center"}}>
                    <SmallButton onClick={handleOpen} text="OPEN" color="white" backgroundColor="black"/>  
                </td> 
                <td className="tableCell" style={{textAlign: "right", minWidth:"175px"}}>
                    <SmallButton onClick={(event) => handleEdit(event, sop)} text="EDIT"/>
                    <SmallButton onClick={handleDelete} text="DELETE" color="white" backgroundColor="#DD0895"/>
                </td>
            </tr>
    )
}

//http://bc.i4i-tor.i4i.com/SOPs/HR-01%20Employees.pdf 
// --> this link works if you replace "{sop.link}" with it. (line 10)
// you must be connected to OpenVPN and have access to the //bc server