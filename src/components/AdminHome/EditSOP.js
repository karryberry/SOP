import React from "react"
import "../css/Table.css"
import SmallButton from "../SmallButton"

export default function EditSOP({editFormData, handleEditSOP, handleCancel}) {
        
    return(
            <tr className="tableRowItems">
                <td className="tableCell" >
                    <input
                        className="inputText"
                        type="text"
                        required="required"
                        placeholder="SOP Name"
                        name="title"
                        value={editFormData.title}
                        onChange={handleEditSOP}
                    ></input>
                </td>
                <td className="tableCell" style={{textAlign: "center"}}>
                    <input
                        className="inputText"
                        type="text"
                        required="required"
                        placeholder="Version"
                        name="version"
                        value={editFormData.version}
                        onChange={handleEditSOP}
                    ></input>
                </td>        
                <td className="tableCell" style={{textAlign: "center"}}>
                    <input
                        className="inputText"
                        type="text"
                        required="required"
                        placeholder="Effective Date"
                        name="effectiveDate"
                        value={editFormData.effectiveDate}
                        onChange={handleEditSOP}
                    ></input>
                </td>
                <td className="tableCell" style={{textAlign: "left"}}>
                    <input
                        className="uploadFile"
                        type="file"
                        required="required"
                        name="link"
                        //value={editFormData.link}
                        onChange={handleEditSOP}
                    ></input>
                </td>
                <td className="tableCell" style={{textAlign: "right", minWidth:"200px"}}>
                    <SmallButton type="submit" text="SAVE"/>
                    <SmallButton onClick={handleCancel} text="CANCEL" color="white" backgroundColor="#DD0895"/>
                </td> 
            </tr>
    )
}