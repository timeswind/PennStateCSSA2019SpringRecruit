import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/home";
import Departments from "./routes/departments";
import Marketing from "./routes/marketing";
import HR from "./routes/hr";
import THON from "./routes/thon";
import SNR from "./routes/snr";
import CE from "./routes/ce";
import IDD from "./routes/idd";
import Treasury from "./routes/treasury";
import PR from './routes/pr';
import Webteam from './routes/webteam';
import Graduate from './routes/graduate';
import PageShell from './components/PageShell'
import { withRouter } from "react-router";
import Header from "./components/Header";
import About from "./routes/about";

const HeaderWithRouter = withRouter(Header);

const AppRouter = function () {
  return (

    <Router>
      <div>
        <HeaderWithRouter></HeaderWithRouter>
        <Route path="/" exact component={PageShell(Home)} />
        <Route path="/departments/" component={PageShell(Departments)} />
        <Route path="/d/marketing" component={PageShell(Marketing)} />
        <Route path="/d/hr" component={PageShell(HR)} />
        <Route path="/d/thon" component={PageShell(THON)} />
        <Route path="/d/snr" component={PageShell(SNR)} />
        <Route path="/d/ce" component={PageShell(CE)} />
        <Route path="/d/treasury" component={PageShell(Treasury)} />
        <Route path="/d/pr" component={PageShell(PR)} />
        <Route path="/d/idd" component={PageShell(IDD)} />
        <Route path="/d/graduate" component={PageShell(Graduate)} />
        <Route path="/d/webteam" component={PageShell(Webteam)} />
        <Route path="/about" component={PageShell(About)} />
      </div>
    </Router>
  )
}



export default AppRouter;