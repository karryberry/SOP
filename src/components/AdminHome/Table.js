import React, { useState, Fragment } from "react"

import "../css/Table.css"
import SOP from "./SOP"
import EditSOP from "./EditSOP"
import AdminHomeData from "../../data/AdminHomeData"
import AddEditSOPDialog from "./AddEditSOPDialog"
import BigButton from "../BigButton"
import { nanoid } from 'nanoid'

function AdminHomeTable() {

    // Create new plugin instance
    // const defaultLayoutPluginInstance = defaultLayoutPlugin();


    const [openDialog, setOpenDialog] = useState(false);

    const [SOPs, setSOPs] = useState(AdminHomeData)
    const [addSOP, setAddSOP] = useState({
        title: '',
        version: '',
        effectiveDate: '',
        link: ''
    })
    const [editFormData , setEditFormData] = useState({
        title: '',
        version: '',
        effectiveDate: '',
        link: ''
    })

    const [editSOP, setEditSOP] = useState(null)

    const handleClickOpenAdd = () => {
        setOpenDialog(true);
    } 

    const handleClose = () => {
        setOpenDialog(false)
      }

    // const handleAddSOP = (event) => {
    
    //     const {name, value, type, files} = event.target
    //     setAddSOP(() => {
    //         return {
    //             ...addSOP, 
    //             [name]: type === "file" ? files[0] : value
    //         }
    //     })
    //  }

    const handleEditSOP = (event) => {
    
        const {name, value, type, files} = event.target
        setEditFormData(() => {
            return {
                ...editFormData, 
                [name]: type === "file" ? files[0] : value
            }
        })
    }

    const handleAddSOP = (event) => {
        event.preventDefault()
        const fieldName = event.target.getAttribute('name')
        const fieldValue = event.target.value
        const newFormData = {...addSOP}
        newFormData[fieldName] = fieldValue

        setAddSOP(newFormData)
     }

    console.log(SOPs)
    
    const handleEdit = (event, sop) =>{
        event.preventDefault()
        setEditSOP(sop.id)

        const formValues = {
            title: sop.title,
            version: sop.version,
            effectiveDate: sop.effectiveDate,
            link: sop.link
        }
        setEditFormData(formValues)
     }

    const handleFormSubmitAdd = (event) => {
        event.preventDefault()
        const newSOP = {
            id: nanoid(),
            title: addSOP.title,
            version: addSOP.version,
            effectiveDate: addSOP.effectiveDate,
            link: addSOP.link
        }
        const newSOPs = [...SOPs, newSOP]
        setSOPs(newSOPs)
        setOpenDialog(false);
     }

    const handleFormSubmitEdit = (event) => {
        event.preventDefault()
        const editedSOP = {
            id: editSOP,
            title: editFormData.title,
            version: editFormData.version,
            effectiveDate: editFormData.effectiveDate,
            link: editFormData.link
        }
        const newSOPs = [...SOPs]
        const index = SOPs.findIndex((sop) => sop.id === editSOP)

        newSOPs[index] = editedSOP
        setSOPs(newSOPs)
        setEditSOP(null)
    }
 
     const handleDelete = (SOPId) => {
        //add a confirmation message
        const newSOPs = [...SOPs]
        const index = SOPs.findIndex((sop) => sop.id === SOPId)

        newSOPs.splice(index, 1)
        setSOPs(newSOPs)
     }

     const handleCancel = () => {
        setEditSOP(null)
     }

     function handleOpenSOP() {
        window.confirm('PDF of SOP opened in new window')
     }

    const SOPElements = SOPs.map((sop) => {
        return (
            <Fragment>
                {editSOP === sop.id ? (
                <EditSOP 
                    editFormData={editFormData} 
                    handleEditSOP={handleEditSOP}
                    handleCancel={handleCancel}
                /> 
                ) : (
                <SOP 
                    sop={sop}
                    handleDelete={() => handleDelete(sop.id)}
                    handleEdit={handleEdit}
                    handleOpen={handleOpenSOP}
                />)}
            
            </Fragment>
    )})

    return (
        <div>
            <div className="buttonWrap">
                <BigButton onClick={handleClickOpenAdd} text="ADD SOP"></BigButton>
            </div>
            <form onSubmit={handleFormSubmitEdit}>
                <table className="table">
                    <thead className="tableRowHeader">
                        <tr>
                            <th className="tableHeader">SOP Name</th>
                            <th className="tableHeader" style={{textAlign: "center"}}>Version</th>
                            <th className="tableHeader" style={{textAlign: "center"}} >Issue Date </th>
                            <th className="tableHeader"></th>
                            <th className="tableHeader"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {SOPElements}
                    </tbody>
                </table>
            </form>
            <AddEditSOPDialog 
                openDialog={openDialog} 
                onClose={handleClose} 
                onSubmitAdd={handleFormSubmitAdd}
                onChangeAdd={handleAddSOP}   
            >
            </AddEditSOPDialog>
        </div>
    )
}
export default AdminHomeTable;

