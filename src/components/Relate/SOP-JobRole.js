import React, { useState, Fragment } from "react"

import "../css/Table.css"
import SOPJB from "./SOPJB"
import SOPJobRole from  "../../data/SOPJobRole"
import SOPJBRelationDialog from "./SOPJBRelationDialog"
import BigButton from "../BigButton"
import { nanoid } from 'nanoid'
 
function SOPJBTable() {
    const [openDialog, setOpenDialog] = useState(false);
    const [SOPJBs, setSOPJBs] = useState(SOPJobRole)
    const [addSOPJB, setAddSOPJB] = useState({
        sop: '',
        jobrole: '',
    })

    const handleClickOpenAdd = () => {
        setOpenDialog(true);
    } 

    const handleClose = () => {
        setOpenDialog(false)
      }

    const handleAddSOPJB = (event) => {
        event.preventDefault()
        const fieldName = event.target.getAttribute('name')
        const fieldValue = event.target.value
        const newFormData = {...addSOPJB}
        newFormData[fieldName] = fieldValue

        setAddSOPJB(newFormData)
     }

    const handleFormSubmitAdd = (event) => {
        event.preventDefault()
        const newSOPJB = {
            id: nanoid(),
            sop: addSOPJB.sop,
            jobrole: addSOPJB.jobrole,
        }
        const newSOPJBs = [...SOPJBs, newSOPJB]
        setSOPJBs(newSOPJBs)
        setOpenDialog(false);
     }

     const handleDelete = (SOPJBId) => {
        //add a confirmation message
        const newSOPJBs = [...SOPJBs]
        const index = SOPJBs.findIndex((sopjb) => sopjb.id === SOPJBId)

        newSOPJBs.splice(index, 1)
        setSOPJBs(newSOPJBs)
     }

    const SOPJBElements = SOPJBs.map((sopjb) => {
        return (
                <SOPJB 
                    sopjb={sopjb}
                    handleDelete={() => handleDelete(sopjb.id)}
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
                            <th className="tableHeader">SOP</th>
                            <th className="tableHeader" >Job Role</th>
                            <th className="tableHeader"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {SOPJBElements}
                    </tbody>
                </table>
            <SOPJBRelationDialog
                title="Add SOP to Job Role Relation"
                openDialog={openDialog} 
                onClose={handleClose} 
                onSubmitAdd={handleFormSubmitAdd}
                onChangeAdd={handleAddSOPJB}   
                first="SOP"
                second="Job Role"
            >
            </SOPJBRelationDialog>
        </div>
    )
}
export default SOPJBTable;

