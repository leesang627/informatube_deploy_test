import React from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FinishButton from './FinishButton';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h4" className={classes.title}>
          Informatube
        </Typography>
        { location.pathname !== '/finish' && <FinishButton /> }
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;