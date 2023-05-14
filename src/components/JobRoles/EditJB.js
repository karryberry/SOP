import React from "react";
import "../css/Table.css"
import SmallButton from "../SmallButton";

export default function EditJB({handleEditJB, editFormData, handleCancel}) {
    return (
            <tr className="tableRowItems">
                <td className="tableCell" >
                    <input
                        className="inputText"
                        type="text"
                        required="required"
                        placeholder="Job Role Name"
                        name="title"
                        value={editFormData.title}
                        onChange={handleEditJB}
                    ></input>
                </td>
                <td className="tableCell" style={{textAlign: "right", minWidth:"200px"}}>
                    <SmallButton type="submit" text="SAVE"/>
                    <SmallButton onClick={handleCancel} text="CANCEL" color="white" backgroundColor="#DD0895"/>
                </td> 
            </tr>
    )
}