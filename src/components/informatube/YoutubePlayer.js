import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ReactPlayer from 'react-player';
import { makeStyles } from '@material-ui/core/styles';
import { PLAY_PLAYER, PAUSE_PLAYER } from '../../reducers/playerReducer';

const useStyles = makeStyles(theme => ({
  playerWrapper: {
    position: "relative",
    height: "50vh"
  },
  ReactPlayer: {
    position: "absolute",
    top: 0,
    left: 0,
  }
}));

const YoutubePlayer = ({ url, handlePlayedSec }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { playing } = useSelector(state => state.player);

  const handleProgress = (playerState) => {
    handlePlayedSec(parseInt(playerState.playedSeconds));
  }

  const handlePlay = () => {
    dispatch({type: PLAY_PLAYER});
  }
  
  const handlePause = () => {
    dispatch({type: PAUSE_PLAYER});
  }
  
  return (
    <div className={classes.playerWrapper}>
      <ReactPlayer 
        className={classes.reactPlayer}
        url={url} 
        width='100%'
        height='100%'
        controls={true}
        onProgress={handleProgress}
        playing={playing}
        onPlay={handlePlay}
        onPause={handlePause}
      />
    </div>
  )
}

export default YoutubePlayer;
