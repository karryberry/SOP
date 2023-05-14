import React from "react";
import SmallButton from "../SmallButton";

export default function JB({jobRole, handleDelete, handleEdit}) {
    return (
            <tr className="tableRowItems" key={jobRole.id}>
                <td className="tableCell">{jobRole.title}</td>
                <td className="tableCell" style={{textAlign: "right"}}>
                    <SmallButton onClick={(event) => handleEdit(event, jobRole)} text="EDIT"/>
                    <SmallButton onClick={handleDelete} text="DELETE" color="white" backgroundColor="#DD0895"/>
                </td>             
            </tr>
    )
}