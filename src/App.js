import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./routes/home";
import Departments from "./routes/departments";
import Xuanchuan from "./routes/xuanchuan";
import HR from "./routes/hr";

import PageShell from './components/PageShell'
import { withRouter } from "react-router";
import Header from "./components/Header";

const HeaderWithRouter = withRouter(Header);

const AppRouter = function () {
  return (

    <Router>
      <div>
        <HeaderWithRouter></HeaderWithRouter>
        <Route path="/" exact component={PageShell(Home)} />
        <Route path="/departments/" component={PageShell(Departments)} />
        <Route path="/d/xuanchuan" component={PageShell(Xuanchuan)} />
        <Route path="/d/hr" component={PageShell(HR)} />

      </div>
    </Router>
  )
}



export default AppRouter;