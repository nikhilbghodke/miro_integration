import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog({setBoardId}) {
  const [open, setOpen] = React.useState(true);
  const [url,setUrl]=React.useState("")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setBoardId(url.split("/")[5])
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Enter Miro Board Link</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please ensure that the board is public or acces has been given to all viewer
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Miro Board Link"
            type="link"
            fullWidth
            value={url}
            onChange={(e)=>{
                setUrl(e.target.value)
            }}
          />
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose} color="primary">
            Enter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}