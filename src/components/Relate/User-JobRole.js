import React, { useState, Fragment } from "react"

import "../css/Table.css"
import UJB from "./UJB"
import UserJobRole from  "../../data/UserJobRole"
import UJBRelationDialog from "./UJBRelationDialog"
import BigButton from "../BigButton"
import { nanoid } from 'nanoid'
 
function UserJBTable() {
    const [openDialog, setOpenDialog] = useState(false);
    const [UJBs, setUJBs] = useState(UserJobRole)
    const [addUJB, setAddUJB] = useState({
        username: '',
        jobrole: '',
    })

    const handleClickOpenAdd = () => {
        setOpenDialog(true);
    } 

    const handleClose = () => {
        setOpenDialog(false)
      }

    const handleAddUJB = (event) => {
        event.preventDefault()
        const fieldName = event.target.getAttribute('name')
        const fieldValue = event.target.value
        const newFormData = {...addUJB}
        newFormData[fieldName] = fieldValue

        setAddUJB(newFormData)
     }

    const handleFormSubmitAdd = (event) => {
        event.preventDefault()
        const newUJB = {
            id: nanoid(),
            username: addUJB.username,
            jobrole: addUJB.jobrole,
        }
        const newUJBs = [...UJBs, newUJB]
        setUJBs(newUJBs)
        setOpenDialog(false);
     }

     const handleDelete = (UJBId) => {
        //add a confirmation message
        const newUJBs = [...UJBs]
        const index = UJBs.findIndex((userjb) => userjb.id === UJBId)

        newUJBs.splice(index, 1)
        setUJBs(newUJBs)
     }

    const UJBElements = UJBs.map((userjb) => {
        return (
                <UJB 
                    userjb={userjb}
                    handleDelete={() => handleDelete(userjb.id)}
                />
    )})
    return (
        <div>
            <div className="buttonWrap">
                <BigButton onClick={handleClickOpenAdd} text="ADD RELATION"></BigButton>
            </div>
                <table className="table">
                    <thead className="tableRowHeader">
                        <tr>
                            <th className="tableHeader">User</th>
                            <th className="tableHeader" >Job Role</th>
                            <th className="tableHeader"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {UJBElements}
                    </tbody>
                </table>
            <UJBRelationDialog
                title="Add User to Job Role Relation"
                openDialog={openDialog} 
                onClose={handleClose} 
                onSubmitAdd={handleFormSubmitAdd}
                onChangeAdd={handleAddUJB}   
                first="User"
                second="Job Role"
            >
            </UJBRelationDialog>
        </div>
    )
}
export default UserJBTable;

