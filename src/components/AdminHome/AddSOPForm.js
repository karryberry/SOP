import React from "react"
import { TextField } from "@mui/material"
import "../css/AddSOPForm.css"

export default function AddSOPForm(props) {

    return (
        <form onSubmit={props.onSubmitAdd}>
            <TextField
                fullWidth
                required
                name="title"
                margin="normal"
                variant="outlined"
                label="SOP Name"
                onChange={props.onChange}
            >
            </TextField>
            <TextField
                fullWidth
                required
                name="version"
                margin="normal" 
                variant="outlined"
                label="Version"
                onChange={props.onChange}
            >
            </TextField>
            <TextField
                fullWidth
                required
                name="effectiveDate"
                margin="normal" 
                variant="outlined"
                type="text"
                label="Issue Date (DD/MM/YYYY)"
                onChange={props.onChange}
            >
            </TextField>
            <input
                //required="required"
                className="uploadFile"
                name="link"
                // value={props.editFormData.link}
                type="file"
                onChange={props.onChange}
            >
            </input>
        </form>
    )
}