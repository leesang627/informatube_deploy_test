import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player';

const Start = () => {
  return (
    <div>
      <Typography variant="h3"gutterBottom>
        안녕하세요!
      </Typography>
      <Typography variant="h5" gutterBottom>
        실험에 참여해주셔서 감사합니다.
      </Typography>
      <Typography variant="h6" gutterBottom>
        시스템 사용법은 여기 아래 유튜브를 시청해주세요.
      </Typography>
      <ReactPlayer
        controls={true}
        url="https://www.youtube.com/watch?v=hG7iMdZHAAs"
      />
      <Button style={{marginTop: 20}} color="primary" variant="contained" component={Link} to={'/login'}>실험 시작</Button>
    </div>
  )
}

export default Start;
