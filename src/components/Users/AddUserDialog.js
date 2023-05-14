import React from "react"
import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from "@mui/material"
// import "./AddEditSOPDialog"
import AddUserForm from "./AddUserForm";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";



export default function AddUserDialog(props) {
    
    const theme = createTheme({
        palette: {
          primary: {
            main: '#DD0895',
            contrastText: '#fff',
          },
          secondary: {
            main: '#FCC843',
            contrastText: '#fff',
          },
        },
      })

    return (
        <ThemeProvider theme={theme}>
            <Dialog open={props.openDialog}>
                <DialogTitle>
                    Add User
                </DialogTitle>
                <DialogContent dividers>
                    <AddUserForm
                        onChange={props.onChangeAdd}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={props.onClose}
                        variant="contained"
                        disableElevation
                        color="primary"
                        sx={{ml: 1,"&.MuiButtonBase-root:hover": {bgcolor: "#DD0895"}}}
                    >Cancel
                    </Button>
                    <Button
                        onClick={props.onSubmitAdd}
                        variant="contained"
                        disableElevation
                        color="primary"
                        sx={{ml: 1,"&.MuiButtonBase-root:hover": {bgcolor: "#DD0895"}}}
                    >Save
                    </Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    )
}