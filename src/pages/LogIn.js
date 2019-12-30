import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LogInForm from '../components/auth/LogInForm';

const useStyles = makeStyles(theme => ({
  paperContainer: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
}));

const LogIn = () => {
  const classes = useStyles();

  return (
    <div className={classes.paperContainer}>
      <LogInForm />
    </div>
  )
}

export default LogIn;
