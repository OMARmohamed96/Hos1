import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './helpers/history';
import { alertClear } from './actions/alertActions';
import Header from './components/Header';
import Home from './components/Home';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';

// import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
        // clear alert on location change
        dispatch(alertClear());
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <Router history={history}>
        {/* <Header /> */}
        {/* {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>} */}
        {/* <Switch> */}
        <Route path="/" component={Home}></Route>
          {/* <Route exact path="/s" component={SignUpForm}></Route> */}
          {/* <Route exact path="/inventory" component={Inventory}></Route> */}
        {/* </Switch> */}
      </Router>
    );
  }
}
function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

export default connect(mapStateToProps)(App);
