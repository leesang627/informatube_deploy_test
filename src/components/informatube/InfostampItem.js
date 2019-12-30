import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useDispatch } from 'react-redux';
import { getImageUrl, MODE_VIEWER, selectInfostamp } from '../../reducers/viewReducer';
import playedSecFunc from '../../functions/playedSecFunc';
import stringFunc from '../../functions/stringFunc';

const useStyles = makeStyles(theme => ({
  inline: {
    display: 'inline',
  },
}));

const InfostampItem = ({ infostamp, viewRef }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { SecTohhmmss } = playedSecFunc;
  const { trunc } = stringFunc;

  const handleClickView = () => {
    dispatch(getImageUrl(infostamp));
    dispatch({type: MODE_VIEWER});
    dispatch(selectInfostamp(infostamp));
    
    setTimeout(() => {
      viewRef.current.scrollTop = infostamp.scroll;
    }, 100);
  }

  return (
    <>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={infostamp.stamper.name}>{infostamp.stamper.name.slice(0,2)}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={trunc(infostamp.info, 60)}
        secondary={
          <>
            <Typography
              component="span"
              variant="body1"
              className={classes.inline}
              color="textPrimary"
            >
              {trunc(infostamp.url, 70)}
            </Typography>
            <br/>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {SecTohhmmss(infostamp.time)}~{SecTohhmmss(infostamp.time+10)} ------- 유용함 {infostamp.likedUsers.length} / 쓸모없음 {infostamp.dislikedUsers.length}
            </Typography>
          </>
        }
      />
      <ListItemSecondaryAction>
        <IconButton onClick={handleClickView} edge="end" aria-label="view">
          <VisibilityIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    <Divider variant="inset" component="li" />
    </>
  );
}

export default InfostampItem;
