import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux';
import { SketchField, Tools } from 'react-sketch';
import { makeStyles } from '@material-ui/core/styles';
import Img from 'react-image';
import InfostampViewLoading from './InfostampViewLoading';

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
}));

const InfostampSketch = ({ src, canvasRef }) => {
  const classes = useStyles();

  const { isChanging } = useSelector(state=>state.view);

  const imgRef = useRef();

  const [canvasHeight, setCanvasHeight] = useState(200);
  const [canvasWidth, setCanvasWidth] = useState(100);

  const handleLoadImage = () => {
    console.log(imgRef);
    setCanvasHeight(imgRef.current.i && imgRef.current.i.height);
    setCanvasWidth(imgRef.current.i && imgRef.current.i.width);
  }

  return (
    <>
      {
        isChanging ? 
          <InfostampViewLoading loadingText="스케치 준비 중" />
          :
          <>
          <Img 
            ref={imgRef} 
            src={src} 
            className={classes.image}
            width={399}
            alt="View" 
            onLoad={handleLoadImage}
            loader={<InfostampViewLoading loadingText="이미지 로딩 중" />}
          />
          <SketchField
            className={classes.canvas}
            ref={canvasRef}
            tool={Tools.Pencil}
            lineColor='rgba(255,0,0,0.7)'
            lineWidth={3}
            width={canvasWidth+2}
            height={canvasHeight}
          />
          </>
      }
    </>
  )
};

export default InfostampSketch;
