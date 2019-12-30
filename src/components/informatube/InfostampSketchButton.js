import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import UndoIcon from '@material-ui/icons/Undo';
import CloseIcon from '@material-ui/icons/Close';
import CircularProgress from '@material-ui/core/CircularProgress';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { saveInfostamp } from '../../reducers/infostampReducer';
import { MODE_HIDDEN } from '../../reducers/viewReducer';
import { loadInfostamps } from '../../reducers/listReducer';


const useStyles = makeStyles(theme => ({
  buttonContainer: {
    width: 300,
    height: 50,
    position: 'absolute',
    left: 50,
    top: 520,
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
  }
}));

const InfostampSketchButton = ({ canvasRef, uid }) => {
  const classes = useStyles();
  const { isSaving, isSaved } = useSelector(state=>state.infostamp);
  const { url, info, time } = useSelector(state=>state.infostamp.formData);
  const { scroll } = useSelector(state=>state.view);
  const dispatch = useDispatch();

  const handleClickSave = () => {
    const imgData = canvasRef.current.toDataURL();
    dispatch(saveInfostamp({imgData, uid, url, info, time, scroll}));
    dispatch(loadInfostamps());
  };

  const handleClickUndo = () => {
    canvasRef.current.undo();
  }

  const handleClickClose = () => {
    dispatch({type: MODE_HIDDEN})
  }

  return (
    <div className={classes.buttonContainer}>
      <div className={classes.buttonGroup}>
        <ButtonGroup
          color="primary"
          variant="contained"
          aria-label="contained primary button group"
        >
          <Tooltip title="스케치 취소" TransitionComponent={Zoom} arrow>
            <Button onClick={handleClickUndo}>
              <UndoIcon />
            </Button>
          </Tooltip>
          <Button onClick={handleClickSave}>
            {
              isSaving ?
                <CircularProgress size={20} color="inherit" />
                :
                isSaved ?
                  <>완료</>
                  :
                  <>댓글</>
            }
          </Button>
          <Tooltip title="닫기" TransitionComponent={Zoom} arrow>
            <Button onClick={handleClickClose}>
              <CloseIcon />
            </Button>
          </Tooltip>
        </ButtonGroup>
      </div>
    </div>
  )
}

export default InfostampSketchButton;
