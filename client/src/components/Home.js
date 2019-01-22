import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import logo from '../logo.png';

import '../App.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Rendering home")
    return (
      <div className="App">
        <div className="App__Aside"><img src={logo} alt="app_logo" /></div>
        <div className="App__Form">
          <div className="PageSwitcher">
            <NavLink exact to="/SignIn" activeClassName="PageSwitcher__Item--Active" className ="PageSwitcher__Item ">Sign In</NavLink>
            <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className ="PageSwitcher__Item ">Sign Up</NavLink>
          </div>
          <div className="FormTitle">
            <NavLink to="/SignIn" activeClassName="FormTitle__Link--Active" className ="FormTitle__Link ">Sign In
            </NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className ="FormTitle__Link">Sign Up</NavLink>
          </div>
          <Route exact path="/SignIn" component={SignInForm}></Route>
          <Route exact path="/" component={SignUpForm} ></Route>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Home);
