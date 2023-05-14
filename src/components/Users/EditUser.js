import React from "react"
import "../css/Table.css"
import SmallButton from "../SmallButton"


export default function EditUser({editFormData, handleEditUser, handleCancel, active, read, admin}) {
        
    return(
            <tr className="tableRowItems">
                <td className="tableCell" >
                    <input
                        className="inputText"
                        type="text"
                        required="required"
                        placeholder="Name"
                        name="name"
                        value={editFormData.name}
                        onChange={handleEditUser}
                    ></input>
                </td>
                <td className="tableCell" style={{textAlign: "center"}}>
                    <input
                        className="inputText"
                        type="text"
                        required="required"
                        placeholder="Username"
                        name="username"
                        value={editFormData.username}
                        onChange={handleEditUser}
                    ></input>
                </td>        
                <td className="tableCell" style={{textAlign: "center"}}>
                    <input
                        className="cm-toggle"
                        type="checkbox"
                        name="active"
                        value="active"
                        checked={editFormData.active}
                        onChange={handleEditUser}
                    ></input>
                </td>
                <td className="tableCell" style={{textAlign: "center"}}>
                    <input
                        className="cm-toggle"
                        type="checkbox"
                        name="read"
                        value="read"
                        checked={editFormData.read}
                        onChange={handleEditUser}
                    ></input>
                </td>
                <td className="tableCell" style={{textAlign: "center"}}>
                    <input
                        className="cm-toggle"
                        type="checkbox"
                        name="admin"
                        value="admin"
                        checked={editFormData.admin}
                        onChange={handleEditUser}
                    ></input>
                </td>
                <td className="tableCell" style={{textAlign: "right", minWidth:"200px"}}>
                    <SmallButton type="submit" text="SAVE"/>
                    <SmallButton onClick={handleCancel} text="CANCEL" color="white" backgroundColor="#DD0895"/>
                </td> 
            </tr>
    )
}