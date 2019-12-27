import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import InfostampItem from './InfostampItem';
import { loadInfostamps } from '../../reducers/listReducer';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}));

const InfostampList = ({ playedSec, viewRef }) => {
  const dispatch = useDispatch();
  const { infostamps } = useSelector(state=>state.list)
  const classes = useStyles();
  useEffect(() => {
    dispatch(loadInfostamps());
  }, []);

  const infostampsInTime = infostamps && infostamps
  .filter((infostamp) => {
    return parseInt(infostamp.time)-10<playedSec && playedSec<parseInt(infostamp.time)+10;
  })
  .sort((a, b) => {
    return ((a.likedUsers.length - a.dislikedUsers.length) - (b.likedUsers.length - b.dislikedUsers.length));
  });

  return (
    <div>
      <List className={classes.root}>
        { 
          infostampsInTime && 
          infostampsInTime.map((infostamp) => (
            <InfostampItem key={infostamp.createdAt} infostamp={infostamp} viewRef={viewRef} />
          ))
        }
      </List>
    </div>
  )
}

export default InfostampList
