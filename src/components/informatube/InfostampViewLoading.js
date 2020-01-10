import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
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

const InfostampViewLoading = ({loadingText}) => {
  const classes = useStyles();
  return (
    <div className={classes.cover}>
      <div className={classes.progress}>
        <CircularProgress/>
        <div><br/>{loadingText}</div>
      </div>
    </div>
  )
}

export default InfostampViewLoading
