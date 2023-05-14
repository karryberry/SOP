import React from "react"
import { TextField } from "@mui/material"
import "../css/AddSOPForm.css"

export default function AddUserForm(props) {

    return (
        <form onSubmit={props.onSubmitAdd}>
            <TextField
                fullWidth
                required
                name="name"
                margin="normal"
                variant="outlined"
                label="Name"
                onChange={props.onChange}
            >
            </TextField>
            <TextField
                fullWidth
                required
                name="username"
                margin="normal" 
                variant="outlined"
                label="Username"
                onChange={props.onChange}
            >
            </TextField>
            <label classname="activeCheck" htmlFor="active">Active</label>
            <input
                type="checkbox"
                id="active"
                name="active"
                value="active"
                className="cm-toggle"
                checked={props.checked}
                onChange={props.onChange}
            >
            </input>
            <label classname="readCheck" htmlFor="read">Read</label>
            <input
                type="checkbox"
                id="read"
                name="read"
                value="read"
                className="cm-toggle"
                checked={props.checked}
                onChange={props.onChange}
            >
            </input>
            <label classname="adminCheck" htmlFor="admin">Admin</label>
            <input
                type="checkbox"
                id="admin"
                name="admin"
                value="admin"
                className="cm-toggle"
                checked={props.checked}
                onChange={props.onChange}
            >
            </input>
        </form>
    )
}