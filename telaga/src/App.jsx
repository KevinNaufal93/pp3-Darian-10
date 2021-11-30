
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './frontend/containers/landingPage'
import Register from './frontend/containers/register'
import {MyNavbar} from './frontend/components'


class App extends React.Component {

  render() {
    return (
    <BrowserRouter>
        <div className="gradient__bg">
        <MyNavbar />
        </div>
        <Switch>
          <Route component={Register} path="/register" />
          <Route component={LandingPage} path="/" />
        </Switch>
    </BrowserRouter>
    )}

}

export default App;
