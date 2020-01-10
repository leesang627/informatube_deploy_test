import React, { useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InfostampSketch from './InfostampSketch';
import InfostampSketchButton from './InfostampSketchButton';
import { changeScroll } from '../../reducers/viewReducer';
import InfostampViewerButton from './InfostampViewerButton';
import stringFunc from '../../functions/stringFunc';
import InfostampViewer from './InfostampViewer';
import { useEffect } from 'react';

const useStyles = makeStyles(theme => ({
  window: {
    width: "100%",
    height: 600,
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
  },
  cover: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: "white",  
  },
  progress: {
    position: 'absolute',
    top: '40%',
    left: '40%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

const InfostampView = ({ uid, canvasRef }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const windowRef = useRef();
  const viewRef = useRef();
  const { trunc } = stringFunc;
  const { mode, imageUrl, selectedInfostamp } = useSelector(state=>state.view);
  const handleScroll = () => {
    dispatch(changeScroll(windowRef.current.scrollTop));
  }
  useEffect(() => {
    console.log(selectedInfostamp);
  }, [selectedInfostamp]);
  
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
              {trunc(selectedInfostamp.info,30)}
            </Typography>
            <Typography variant="subtitle2">
              {trunc(selectedInfostamp.url, 40)}
            </Typography>
          </div>
          <div className={classes.window} ref={viewRef}>
            <InfostampViewer 
              imageUrl={imageUrl}  
              viewRef={viewRef}
              selectedInfostamp={selectedInfostamp}
            />
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
