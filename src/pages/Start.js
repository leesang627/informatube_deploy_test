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
        시스템 사용법은 여기 아래 유튜브를 시청해주세요.<br/>
        영상 설명이 빠르다고 느껴지시면 속도를 늦춰주세요.<br/>
        시스템을 사용하시다가 이해가 안되는 부분이 있으면 뒤로가기로 돌아오셔서 확인하실 수 있습니다.<br/>
        초보 웹 개발자가 구현만 집중하다보니, 최적화가 안 되서 시스템이 매우 느립니다.<br/>
        특히 이미지 로딩이 매우 느리니 조금만 기다려주시면 감사하겠습니다.<br/>
        버그가 생기면 조치를 취해 드릴테니 연락주시면 감사하겠습니다.<br/>
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
