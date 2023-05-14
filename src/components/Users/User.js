import React from "react"
import SmallButton from "../SmallButton"

export default function User({user, handleDelete, handleEdit}) {
    return (
            <tr className="tableRowItems" key={user.id}>
                <td className="tableCell"> {user.name} </td>
                <td className="tableCell">{user.username}</td>        
                <td className="tableCell" style={{textAlign: "center"}}>{user.active ? "Yes" : "No" }</td>
                <td className="tableCell" style={{textAlign: "center"}}>{user.read ? "Yes" : "No" }</td>
                <td className="tableCell" style={{textAlign: "center"}}>{user.admin ? "Yes" : "No" }</td>
                <td className="tableCell" style={{textAlign: "right", minWidth:"175px"}}>
                    <SmallButton onClick={(event) => handleEdit(event, user)} text="EDIT"/>
                    <SmallButton onClick={handleDelete} text="DELETE" color="white" backgroundColor="#DD0895"/>
                </td>
            </tr>
    )
}