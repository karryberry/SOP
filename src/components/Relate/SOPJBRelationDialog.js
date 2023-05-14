import React from "react"
import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from "@mui/material"
import SOPJBRelationForm from "./SOPJBRelationForm";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";

export default function RelationDialog({openDialog, onChangeAdd, onClose, onSubmitAdd, title, DataOne, DataTwo, first, second}) {
    
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
            <Dialog open={openDialog}>
                <DialogTitle>
                    {title}
                </DialogTitle>
                <DialogContent dividers>
                    <SOPJBRelationForm
                        onChange={onChangeAdd}
                        first={first}
                        second={second}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={onClose}
                        variant="contained"
                        disableElevation
                        color="primary"
                        sx={{ml: 1,"&.MuiButtonBase-root:hover": {bgcolor: "#DD0895"}}}
                    >Cancel
                    </Button>
                    <Button
                        onClick={onSubmitAdd}
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