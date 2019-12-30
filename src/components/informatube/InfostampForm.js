import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import BootstrapButton from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import playedSecFunc from '../../functions/playedSecFunc';
import { urlToImage, MODE_SKETCH } from '../../reducers/viewReducer';
import { changeFormData } from '../../reducers/infostampReducer';
import { PAUSE_PLAYER, PLAY_PLAYER } from '../../reducers/playerReducer';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '80px',
    //backgroundColor: 'grey',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '90%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  inputForm: {
    width: '100%',
  },
  br1: {
    height: 10,
    width: 10,
  },
  br2: {
    height: 5,
    width: 5,
  },
  buttonContainer: {
    width: '100%',
    height: '100%',
  },
}))

const InfostampForm = ({ playedSec, name, canvasRef }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { mode } = useSelector(state => state.view);
  const { playing } = useSelector(state => state.player);
  const { isLoaded } = useSelector(state => state.list);
  const me = useSelector(state => state.user.me);
  const _id = me && me._id;
  const [timeChange, setTimeChange] = useState(true);
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [infostamp, setInfostamp] = useState({
    time: '',
    url: '',
    info: '',
  });

  const handleTimeStop = () => {
    setTimeChange(false);
    setInfostamp({
      ...infostamp,
      time: playedSec, 
    });
    dispatch({type: PAUSE_PLAYER});
  };

  const handleTimeStart = () => {
    setTimeChange(true);
    dispatch({type: PLAY_PLAYER});
  };

  useEffect(() => {
    const regex_url = /[-a-zA-Z0-9@:%_.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_.~#?&//=]*)?/g;
    if(!timeChange && infostamp.url.match(regex_url)){
      setDisableSubmit(false);
    } else{
      setDisableSubmit(true);
    }
  }, [timeChange, infostamp.time, infostamp.url, infostamp.info])

  useEffect(() => {
    if(playing) {
      handleTimeStart();
    } else {
      handleTimeStop();
    }
  }, [playing])

  useEffect(() => {
    console.log('hello');
    if(isLoaded) {
      setInfostamp(prev => ({
        ...prev,
        url: '',
        info: '',
      }))
    }
  }, [isLoaded])

  const handleChangeForm = (e) => {
    setInfostamp({
      ...infostamp,
      [e.target.id]: e.target.value,
    });
  }

  const handleSubmitInfostamp = (e) => {
    e.preventDefault();
    canvasRef.current && canvasRef.current.clear();
    dispatch(changeFormData(infostamp));
    dispatch(urlToImage(infostamp.url, _id));
    dispatch({type: MODE_SKETCH});
  } 

  const handleClickDeleteUrl = () => {
    setInfostamp({
      ...infostamp,
      url: '',
    });
  }

  const handleClickDeleteInfo = () => {
    setInfostamp({
      ...infostamp,
      info: '',
    });
  }

  return (
    <div className={classes.root}>
      {
        timeChange ? 
        <Tooltip title="시간 선택" TransitionComponent={Zoom} arrow>
          <Button variant="contained" color="primary" onClick={handleTimeStop}>
            {playedSecFunc.SecTohhmmss(playedSec)}<br/>선택
          </Button>
        </Tooltip>   
        :
        <Tooltip title="시간 선택 취소" TransitionComponent={Zoom} arrow>
          <Button variant="contained" color="secondary" onClick={handleTimeStart}>
            {playedSecFunc.SecTohhmmss(infostamp.time)}<br/>취소
          </Button>
        </Tooltip>
      }
      <div className={classes.br1}></div>
      <form onSubmit={handleSubmitInfostamp} className={classes.formContainer} autoComplete="off">
        <div className={classes.inputContainer}>
          <div className={classes.inputForm}>
            <InputGroup size="sm">
              <InputGroup.Prepend>
                <InputGroup.Text>댓글</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl 
                value={infostamp.info} 
                id="info" 
                onChange={handleChangeForm} 
                aria-label="info" 
                aria-describedby="inputInfo"
                placeholder="관련 정보를 댓글로 달아주세요." 
                disabled={mode === 'sketch'}
              />
              <InputGroup.Append>
                <BootstrapButton 
                  variant="outline-secondary" 
                  onClick={handleClickDeleteInfo}
                  disabled={mode === 'sketch'}
                >지우기</BootstrapButton>
              </InputGroup.Append>
            </InputGroup>
            <div className={classes.br2}></div>
            <InputGroup size="sm">
              <InputGroup.Prepend>
                <InputGroup.Text >URL</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl 
                value={infostamp.url} 
                id="url" 
                onChange={handleChangeForm} 
                aria-label="url" 
                aria-describedby="inputURL" 
                placeholder="출처 URL을 적어주세요."
                disabled={mode === 'sketch'}
              />
              <InputGroup.Append>
                <BootstrapButton 
                  variant="outline-secondary" 
                  onClick={handleClickDeleteUrl}
                  disabled={mode === 'sketch'}
                >지우기</BootstrapButton>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </div>
        <div className={classes.br1}></div>
        <Tooltip title="스케치 모드" TransitionComponent={Zoom} arrow>
          <Button
            color="primary"
            type="submit"
            variant="contained"
            disabled={disableSubmit}
          >
            <VisibilityIcon/>
          </Button>
        </Tooltip>
        
      </form>
    </div>
  )
}

export default InfostampForm;
