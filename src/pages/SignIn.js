import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SignInForm from '../components/auth/SignInForm';

const useStyles = makeStyles(theme => ({
  paperContainer: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
}));

const SignIn = () => {
  const classes = useStyles();

  return (
    <div className={classes.paperContainer}>
      <SignInForm />
    </div>
  )
}

export default SignIn;
