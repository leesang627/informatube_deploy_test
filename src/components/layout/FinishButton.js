import React from 'react';
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const FinishButton = () => {
  const [open, setOpen] = React.useState(false);

  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleClickFinish = () => {
    handleClose();
    history.push('/finish');
  }

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        실험 종료
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">실험 종료</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            정말 실험을 종료하시겠습니까?<br /> 종료하면 다시 실험에 참여하지 못합니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickFinish} color="secondary">
            네, 실험 종료하겠습니다.
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            아니오
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default FinishButton;
