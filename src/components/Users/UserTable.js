import React, { useState, Fragment } from "react"

import "../css/Table.css"
import User from "./User"
import EditUser from "./EditUser"
import UserData from "../../data/UserData"
import AddUserDialog from "./AddUserDialog"
import BigButton from "../BigButton"
import { nanoid } from 'nanoid'
 
function UserTable() {
    const [openDialog, setOpenDialog] = useState(false);

    const [Users, setUsers] = useState(UserData)

    const [addUser, setAddUser] = useState({
        name: null,
        username: null,
        active: null,
        read: null,
        admin: null
    })
    const [editFormData , setEditFormData] = useState({
        name: null,
        username: null,
        active: null,
        read: null,
        admin: null
    })

    const [editUser, setEditUser] = useState(null)

    const handleClickOpenAdd = () => {
        setOpenDialog(true);
    } 

    const handleClose = () => {
        setOpenDialog(false)
      }

    const handleAddUser = (event) => {
        const {name, value, type, checked} = event.target
        setAddUser(() => {
            return {
                ...addUser, 
                [name]: type === "checkbox" ? checked : value
            }
        })
     }

    const handleEditUser = (event) => {
        const {name, value, type, checked} = event.target
        setEditFormData(() => {
            return {
                ...editFormData, 
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    const handleEdit = (event, user) =>{
        event.preventDefault()
        setEditUser(user.id)

        const formValues = {
            name: user.name,
            username: user.username,
            active: user.active,
            read: user.read,
            admin: user.admin
        }
        setEditFormData(formValues)
     }

    const handleFormSubmitAdd = (event) => {
        event.preventDefault()
        const newUser = {
            id: nanoid(),
            name: addUser.name,
            username: addUser.username,
            active: addUser.active,
            read: addUser.read,
            admin: addUser.admin
        }
        const newUsers = [...Users, newUser]
        setUsers(newUsers)
        setAddUser({
                name: null,
                username: null,
                active: false,
                read: false,
                admin: false
            })
        setOpenDialog(false);
     }

    const handleFormSubmitEdit = (event) => {
        event.preventDefault()
        const editedUser = {
            id: editUser,
            name: editFormData.name,
            username: editFormData.username,
            active: editFormData.active,
            read: editFormData.read,
            admin: editFormData.admin
        }
        const newUsers = [...Users]
        const index = Users.findIndex((user) => user.id === editUser)

        newUsers[index] = editedUser
        setUsers(newUsers)
        setEditUser(null)
    }
 
     const handleDelete = (UserId) => {
        //add a confirmation message

        const newUsers = [...Users]
        const index = Users.findIndex((user) => user.id === UserId)

        newUsers.splice(index, 1)
        setUsers(newUsers)
     }

     const handleCancel = () => {
        setEditUser(null)
     }

    const UserElements = Users.map((user) => {
        return (
            <Fragment>
                {editUser === user.id ? (
                <EditUser 
                    editFormData={editFormData} 
                    handleEditUser={handleEditUser}
                    handleCancel={handleCancel}
                /> 
                ) : (
                <User 
                    user={user}
                    handleDelete={() => handleDelete(user.id)}
                    handleEdit={handleEdit}
                />)}
            
            </Fragment>
    )})
    return (
        <div>
            <div className="buttonWrap">
                <BigButton onClick={handleClickOpenAdd} text="ADD USER"></BigButton>
            </div>
            <form onSubmit={handleFormSubmitEdit}>
                <table className="table">
                    <thead className="tableRowHeader">
                        <tr>
                            <th className="tableHeader">Name</th>
                            <th className="tableHeader">Username</th>
                            <th className="tableHeader" style={{textAlign: "center"}} >Active</th>
                            <th className="tableHeader" style={{textAlign: "center"}} >Read</th>
                            <th className="tableHeader" style={{textAlign: "center"}} >Admin</th>
                            <th className="tableHeader"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {UserElements}
                    </tbody>
                </table>
            </form>
            <AddUserDialog 
                openDialog={openDialog} 
                onClose={handleClose} 
                onSubmitAdd={handleFormSubmitAdd}
                onChangeAdd={handleAddUser}  
            >
            </AddUserDialog>
        </div>
    )
}
export default UserTable;

