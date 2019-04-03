import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './containers/LoginPage/LoginPage';
import UserPage from './containers/UserPage/UserPage';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/user" component={UserPage} />
          <Route path="/" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
