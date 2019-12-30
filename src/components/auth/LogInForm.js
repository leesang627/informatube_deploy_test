import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { logIn } from '../../reducers/userReducer';

const useStyles = makeStyles(theme => ({
  formContainer: {
    width: 400,
    height: 400,
    padding: 20,
    display: "flex",
    flexFlow: "column wrap",
    alignContent: "center",
    justifyContent: "center",
  },
}))

const LogInForm = () => {
  const classes = useStyles();
  const { me } = useSelector(state=>state.user);
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(name));
  }

  return (
    <>
    { me && <Redirect to={"/experiment"} /> }
    <Paper className={classes.formContainer}>
      <Typography variant="h4" >
        익명 로그인
      </Typography>
      <Typography component="p" style={{margin: "45px 0 5px 0"}}>
        당신을 식별할 수 있는 아이디를 마음대로 적으세요! <br />어떤 아이디이던 상관 없습니다.
      </Typography>
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom: 30}}>
          <TextField 
            id="name" 
            label="익명 아이디" 
            value={name}
            onChange={handleChangeName}
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
          로그인
        </Button>
      </form>
    </Paper>
    </>
  )
}

export default LogInForm;
