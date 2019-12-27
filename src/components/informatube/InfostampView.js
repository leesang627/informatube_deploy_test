import React, { useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import InfostampSketch from './InfostampSketch';
import InfostampSketchButton from './InfostampSketchButton';
import { changeScroll } from '../../reducers/viewReducer';
import InfostampViewerButton from './InfostampViewerButton';

String.prototype.trunc = String.prototype.trunc ||
  function(n){
    return (this.length > n) ? this.substr(0, n-1) + '...' : this;
  };

const useStyles = makeStyles(theme => ({
  window: {
    width: "100%",
    height: 512,
    overflow: "auto",
    position: 'relative',
  },
  image: {
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  sketch: {
    border: "1px solid red",
  },
  viewer: {
    border: "1px solid blue",
  },
  infoContainer: {
    width: "100%",
    padding: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }
}));

const InfostampView = ({ uid, canvasRef, viewRef }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const windowRef = useRef();
  
  const { mode, imageUrl, selectedInfostamp } = useSelector(state=>state.view);
  const handleScroll = () => {
    dispatch(changeScroll(windowRef.current.scrollTop));
  }
  
  return (
    <>
    {
      mode === 'sketch' ? 
      <>
        <div className={classes.sketch}>
          <div className={classes.infoContainer}>
            <Typography variant="subtitle1" color="secondary">
              스케치 모드
            </Typography>
            <Typography variant="subtitle2">
              원하는 위치로 스크롤 후, 표시를 해주세요.
            </Typography>
          </div>
          <div className={classes.window} onScroll={handleScroll} ref={windowRef}>
            <InfostampSketch canvasRef={canvasRef} src={imageUrl} uid={uid}/>
          </div>
        </div>
        <InfostampSketchButton canvasRef={canvasRef} uid={uid}/> 
      </>
      : 
      mode === 'viewer' ?
      <>
        <div className={classes.viewer}>
          <div className={classes.infoContainer}>
            <Typography variant="subtitle1" color="primary">
              {selectedInfostamp.info}
            </Typography>
            <Typography variant="subtitle2">
              {selectedInfostamp.url.trunc(40)}
            </Typography>
          </div>
          <div className={classes.window} ref={viewRef}>
            <img src={imageUrl} className={classes.image} alt="View" />
          </div>
        </div>
        <InfostampViewerButton uid={uid} />
      </>
      :
      <div></div>
    }
    </>
  )
}

export default InfostampView;
