import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/layout/Navbar';
import Experiment from './pages/Experiment';
import LogIn from './pages/LogIn';
import About from './pages/About';
import Finish from './pages/Finish';
import Start from './pages/Start';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: "flex",
    justifyContent: "center"
  },
  routeContainer: {
    marginTop: 30,
    width: 1280,
    height: 800,
    overflow: "hidden"
  }
}))

function App() {
  const classes = useStyles();
  return (
    <>
      {/* <BrowserRouter> */}
      <HashRouter>
        <CssBaseline />
        <div className="App">
          <Navbar />
          <div className={classes.mainContainer}>
            <div className={classes.routeContainer}>
              <Switch>
                <Route exact path={"/"} component={Start} />
                <Route path={"/login"} component={LogIn} />
                <Route path={"/about"} component={About} />
                <Route path={"/experiment"} component={Experiment} />
                <Route path={"/finish"} component={Finish} />
              </Switch>
            </div>
            
          </div>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
