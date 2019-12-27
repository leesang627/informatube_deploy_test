const playedSecFunc = {};

playedSecFunc.SecTohhmmss = (playedSec) => {
  if(playedSec < 0) {
    return "0:00"
  }
  const pad = (d) => ((d < 10) ? '0' + d.toString() : d.toString());
  if (playedSec<60) {
    return "0:"+pad(String(playedSec));
  } else if (playedSec<3600) {
    return String(parseInt(playedSec/60))+":"+pad(playedSec%60);
  } else {
    let hh=parseInt(playedSec/3600)
    return String(hh)+":"+pad(parseInt((playedSec%3600)/60))+":"+pad(playedSec%60);
  }
}

export default playedSecFunc;