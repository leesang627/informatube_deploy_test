import React, { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { SketchField, Tools } from 'react-sketch';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  image: {
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: "100%",
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

const InfostampSketch = ({ src, uid, canvasRef }) => {
  const classes = useStyles();

  const { isChanging } = useSelector(state=>state.view);

  const imgRef = useRef();

  const [canvasHeight, setCanvasHeight] = useState(200);
  useEffect(() => {
    setTimeout(() => {
      setCanvasHeight(imgRef.current && imgRef.current.height);
    },100)
  }, [src]);
  return (
    <>
      {
        isChanging ?
          <div className={classes.cover}>
            <div className={classes.progress}>
              <CircularProgress/>
              <div><br/>스케치 준비 중</div>
            </div>
          </div>
          :
          <>
            <img ref={imgRef} src={src} className={classes.image} alt="View"/>
            <SketchField
              className={classes.canvas}
              ref={canvasRef}
              tool={Tools.Pencil}
              lineColor='red'
              lineWidth={3}
              height={canvasHeight}
            />
          </>
      }
    </>
  )
};

export default InfostampSketch;
