import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom' ;
import {Route, Link, NavLink} from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import logo from './logo.png';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
       <div className="App__Aside"><img src={logo} alt="app_logo" />;</div>
       <div className="App__Form">
         <div className = "PageSwitcher">
           <NavLink to ="/SignIn"  activeClassName="PageSwitcher__Item--Active" className ="PageSwitcher__Item ">Sign In</NavLink>
           <NavLink exact to ="/" activeClassName="PageSwitcher__Item--Active" className ="PageSwitcher__Item ">Sign Up</NavLink>
         </div>
         <div className="FormTitle">
           <NavLink to="/SignIn" activeClassName="FormTitle__Link--Active" className ="FormTitle__Link ">Sign In
           </NavLink> or <NavLink exact to= "/" activeClassName="FormTitle__Link--Active"  className ="FormTitle__Link  ">Sign Up</NavLink>
         </div>

        <Route exact path="/" component={SignUpForm} ></Route>
        <Route path="/SignIn" component={SignInForm}></Route>

       </div>
      </div>
      </Router>
    );
  }
}

export default App;
