
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './frontend/containers/landingPage'
import Register from './frontend/containers/register'
import Login from './frontend/containers/login'
import SuperAdmin from './frontend/containers/superAdminPage'
import AdminView from './frontend/containers/adminView'
import TaskManager from './frontend/containers/taskManager'
import {MyNavbar} from './frontend/components'

import { connect } from "react-redux";
import { userKeepLogin, checkStorage } from "./frontend/redux/action/user";


class App extends React.Component {

  componentDidMount() {
    const userLocalStorage = localStorage.getItem("userDataTelaga");
    //const userData = JSON.parse(userLocalStorage);

    if (userLocalStorage) {
      this.props.userKeepLogin(userLocalStorage);
      //console.log(userData.username);
    } else {
      this.props.checkStorage();
    }
  }

  render() {
    return (
    <BrowserRouter>
      <div className="bg">
        <MyNavbar />
        <Switch>
          <Route component={Register} path="/register" />
          <Route component={SuperAdmin} path="/sa" />
          <Route component={AdminView} path="/av" />
          <Route component={Login} path="/login" />
          <Route component={TaskManager} path="/tm" />
          <Route component={LandingPage} path="/" />
        </Switch>
      </div>
    </BrowserRouter>
    )}

}

const mapStateToProps = (state) => {
  return {
    userGlobal: state.user,
  };
};

const mapDispatchToProps = {
  userKeepLogin,
  checkStorage,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

