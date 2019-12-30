import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Navbar from './components/layout/Navbar';
// import Experiment from './pages/Experiment';
// import LogIn from './pages/LogIn';
// import About from './pages/About';
// import Finish from './pages/Finish';
// import Start from './pages/Start';
import {Start, LogIn, About, Experiment, Finish} from './pages';

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      <HashRouter>
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
      </HashRouter>
    </>
  );
}

export default App;