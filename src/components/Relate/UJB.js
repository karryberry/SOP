import React from "react"
import SmallButton from "../SmallButton"
import "../css/Table.css"

export default function SOPJB({userjb, handleDelete}) {
        
    return(
            <tr className="tableRowItems" key={userjb.id}>
                <td className="tableCell">{userjb.username}</td>        
                <td className="tableCell">{userjb.jobrole}</td>
                <td className="tableCell" style={{textAlign: "right", minWidth:"175px"}}>
                    <SmallButton onClick={handleDelete} text="DELETE" color="white" backgroundColor="#DD0895"/>
                </td>
            </tr>
    )
}

