import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FinishButton from './FinishButton';
import { LOAD_USER_REQUEST } from '../../reducers/userReducer';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);
  useEffect(() => {
    if(!me) {
      dispatch({
        type: LOAD_USER_REQUEST,
      })
    }
  },[me, dispatch])

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