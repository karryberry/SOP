import React, { useState, Fragment } from "react"

import "../css/Table.css"
import JobRoleData from "../../data/JobRoleData"
import JB from "./JB"
import EditJB from "./EditJB"
import BigButton from "../BigButton"
import { nanoid } from 'nanoid'
import AddJBDialog from "./AddJBDialog"
 
function JobRoleTable() {
    const [openDialog, setOpenDialog] = useState(false);

    const [JBs, setJBs] = useState(JobRoleData)
    const [addJB, setAddJB] = useState({
        title: '',
    })
    const [editFormData , setEditFormData] = useState({
        title: '',
    })

    const [editJB, setEditJB] = useState(null)

    const handleClickOpenAdd = () => {
        setOpenDialog(true);
    } 

    const handleClose = () => {
        setOpenDialog(false)
      }

    const handleAddJB = (event) => {
        event.preventDefault()
        const fieldName = event.target.getAttribute('name')
        const fieldValue = event.target.value
        const newFormData = {...addJB}
        newFormData[fieldName] = fieldValue

        setAddJB(newFormData)
     }

    const handleEditJB = (event) => {
        event.preventDefault()
        const fieldName = event.target.getAttribute('name')
        const fieldValue = event.target.value
        const newFormData = {...editFormData}
        newFormData[fieldName] = fieldValue
       
        setEditFormData(newFormData)
    }
    
    const handleEdit = (event, jobRole) =>{
        event.preventDefault()
        setEditJB(jobRole.id)

        const formValues = {
            title: jobRole.title,
        }
        setEditFormData(formValues)
     }

    const handleFormSubmitAdd = (event) => {
        event.preventDefault()
        const newJB = {
            id: nanoid(),
            title: addJB.title,
        }
        const newJBs = [...JBs, newJB]
        setJBs(newJBs)
        setOpenDialog(false);
     }

    const handleFormSubmitEdit = (event) => {
        event.preventDefault()
        const editedJB = {
            id: editJB,
            title: editFormData.title,
        }
        const newJBs = [...JBs]
        const index = JBs.findIndex((jobRole) => jobRole.id === editJB)

        newJBs[index] = editedJB
        setJBs(newJBs)
        setEditJB(null)
    }
 
     const handleDelete = (JBId) => {
        //add a confirmation message
        const newJBs = [...JBs]
        const index = JBs.findIndex((jobRole) => jobRole.id === JBId)

        newJBs.splice(index, 1)
        setJBs(newJBs)
     }

     const handleCancel = (event) => {
        setEditJB(null)
     }

    const JBElements = JBs.map((jobRole) => {
        return (
            <Fragment>
                {editJB === jobRole.id ? (
                <EditJB 
                    editFormData={editFormData} 
                    handleEditJB={handleEditJB}
                    handleCancel={handleCancel}
                /> 
                ) : (
                <JB 
                    jobRole={jobRole}
                    handleDelete={() => handleDelete(jobRole.id)}
                    handleEdit={handleEdit}
                />)}
            </Fragment>
    )})
    return (
        <div>
            <div className="buttonWrap">
                <BigButton onClick={handleClickOpenAdd} text="ADD JOB ROLE"></BigButton>
            </div>
            <form onSubmit={handleFormSubmitEdit}>
                <table className="table">
                    <thead className="tableRowHeader">
                        <tr>
                            <th className="tableHeader">Job Role Name</th>
                            <th className="tableHeader"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {JBElements}
                    </tbody>
                </table>
            </form>
            <AddJBDialog 
                openDialog={openDialog} 
                onClose={handleClose} 
                onSubmitAdd={handleFormSubmitAdd}
                onChangeAdd={handleAddJB}   
            >
            </AddJBDialog>
        </div>
    )
}
export default JobRoleTable;

