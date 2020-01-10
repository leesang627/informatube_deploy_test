import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import Zoom from '@material-ui/core/Zoom';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { like, dislike, cancelLike, cancelDislike } from '../../reducers/likeReducer';
import { MODE_HIDDEN } from '../../reducers/viewReducer';



const useStyles = makeStyles(theme => ({
  buttonContainer: {
    width: 300,
    height: 50,
    position: 'absolute',
    left: 55,
    top: 600,
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 15,
  }
}));

const InfostampViewerButton = ({ uid }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { url } = useSelector(state=>state.view.selectedInfostamp);
  const { selectedInfostamp } = useSelector(state => state.view)

  const [likeToggle, setLikeToggle] = useState(false);
  const [dislikeToggle, setDislikeToggle] = useState(false);

  useEffect(()=>{
    setLikeToggle(false);
    setDislikeToggle(false);
  }, [url]);

  const handleClickLike = () => {
    const iid = selectedInfostamp._id;
    if (!likeToggle && !dislikeToggle) {
      setLikeToggle(true);
      dispatch(like(uid, iid));
    } else if (likeToggle && !dislikeToggle) {
      setLikeToggle(false);
      dispatch(cancelLike(uid, iid));
    }
  }
  const handleClickDislike = () => {
    const iid = selectedInfostamp._id;
    if (!likeToggle && !dislikeToggle) {
      setDislikeToggle(true);
      dispatch(dislike(uid, iid));
    } else if (!likeToggle && dislikeToggle) {
      setDislikeToggle(false);
      dispatch(cancelDislike(uid,iid));
    }
  }
  const handleClickClose = () => {
    dispatch({ type:MODE_HIDDEN });
  }
  const handleClickOpenUrl = () => {
    window.open(url.startsWith('http://') || url.startsWith('https://') ? url : 'http://'+url, "_blank");
  }

  return (
    <>
    <div className={classes.closeButton}>
      <IconButton onClick={handleClickClose}>
        <CloseIcon/>
      </IconButton>
    </div>
    <div className={classes.buttonContainer}>
      <div className={classes.buttonGroup}>
        <ButtonGroup
          color="primary"
          variant="contained"
          aria-label="contained primary button group"
        >
          <Tooltip title="유용함"  TransitionComponent={Zoom} arrow>
            <Button color={!likeToggle ? 'primary' : 'secondary'} onClick={handleClickLike} disabled={dislikeToggle}>
              <ThumbUpAltIcon />
            </Button>
          </Tooltip>
          <Button onClick={handleClickOpenUrl}>
            링크
          </Button>
          <Tooltip title="쓸모없음" TransitionComponent={Zoom} arrow>
            <Button color={!dislikeToggle ? 'primary' : 'secondary'} onClick={handleClickDislike} disabled={likeToggle}>
              <ThumbDownAltIcon />
            </Button>
          </Tooltip>
        </ButtonGroup>
      </div>
    </div>
    </>
  )
}

export default InfostampViewerButton;
