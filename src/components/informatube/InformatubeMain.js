import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import YoutubePlayer from './YoutubePlayer';
import InfostampForm from './InfostampForm';
import InfostampList from './InfostampList';
import InfostampView from './InfostampView';

const InformatubeMain = () => {
  const me = useSelector(state => state.user.me);
  const name = me && me.name;
  const _id = me && me._id;
  const [playedSec, setPlayedSec] =useState(0);
  const canvasRef = useRef();
  const viewRef = useRef();

  const handlePlayedSec = (playedSec) => {
    setPlayedSec(playedSec);
  }

  return (
    <div style={{flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <YoutubePlayer 
            url="https://www.youtube.com/watch?v=e1tqHqLFHIU" 
            handlePlayedSec={handlePlayedSec}
          />
          <InfostampForm playedSec={playedSec} name={name} canvasRef={canvasRef}/>
          <InfostampList playedSec={playedSec} viewRef={viewRef}/>
        </Grid>
        <Grid item xs={4} style={{position: 'relative'}}>
          <InfostampView uid={_id} canvasRef={canvasRef} viewRef={viewRef}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default InformatubeMain;
