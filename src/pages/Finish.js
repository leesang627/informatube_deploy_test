import React from 'react'
import Typography from '@material-ui/core/Typography'

const Finish = () => {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        수고하셨습니다!
      </Typography>
      <Typography variant="h5" gutterBottom>
        실험이 종료되었습니다.
      </Typography>
      <Typography variant="h6" >
        다 끝나셨다면, 이 창을 닫으시고, 시스템 사용 후 설문을 진행해주세요.
      </Typography>
      <Typography variant="h6" >
        정말 감사합니다!
      </Typography>
    </div>
  )
}

export default Finish;
