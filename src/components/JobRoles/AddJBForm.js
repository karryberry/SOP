import React from "react"
import { TextField } from "@mui/material"
import "../css/AddSOPForm.css"

export default function AddJBForm(props) {

    return (
        <form onSubmit={props.onSubmitAdd}>
            <TextField
                fullWidth
                required
                name="title"
                margin="normal"
                variant="outlined"
                label="Job Role Name"
                onChange={props.onChange}
            >
            </TextField>
        </form>
    )
}