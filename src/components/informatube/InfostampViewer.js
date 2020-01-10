import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Img from 'react-image';
import InfostampViewLoading from './InfostampViewLoading';

const useStyles = makeStyles(theme => ({
  image: {
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
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
  },
}));

const InfostampViewer = ({imageUrl, viewRef, selectedInfostamp}) => {
  const classes = useStyles();

  const handleLoadView = () => {
    console.log('handleLoadView');
    console.log(selectedInfostamp.scroll);
    viewRef.current.scrollTop = selectedInfostamp.scroll;
  }

  return (
    <>
      <Img 
        src={imageUrl} 
        className={classes.image} 
        alt="View" 
        onLoad={handleLoadView}
        width={399}
        loader={<InfostampViewLoading loadingText="이미지 로딩 중"/>}
      />
    </>
  )
}

export default InfostampViewer;
