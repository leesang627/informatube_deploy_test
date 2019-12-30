import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Navbar from './components/layout/Navbar';
import Experiment from './pages/Experiment';
import LogIn from './pages/LogIn';
import About from './pages/About';
import Finish from './pages/Finish';
import Start from './pages/Start';

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      <BrowserRouter basename="/informatube_deploy_test">
        <CssBaseline />
        <div className="App">
          <Navbar />
          <div style={{marginTop: '30px'}}>
            <Container fixed>
              <Switch>
                <Route exact path={"/"} component={Start} />
                <Route path={"/login"} component={LogIn} />
                <Route path={"/about"} component={About} />
                <Route path={"/experiment"} component={Experiment} />
                <Route path={"/finish"} component={Finish} />
              </Switch>
            </Container>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
