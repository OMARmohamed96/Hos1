import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { register } from '../actions/userActions';

import '../App.css';

class SignUpForm extends Component {


  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: '',
        password: '',
        name: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    const { user } = this.state;
    this.setState({
      user: {
          ...user,
          [name]: value
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('The form was submitted with the following data:');
    console.log(this.state);
    const { username, password, name } = this.state.user;
    const { dispatch } = this.props;
    console.log(this.props);
    if (username && name && password) {
        dispatch(register(this.state.user));
    }
  }

  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">Full Name</label>
            <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password</label>
            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="username">Username</label>
            <input type="text" id="username" className="FormField__Input" placeholder="Enter your username" name="username" value={this.state.username} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button><NavLink to ="/SignIn "className="FormField__Link">I'm already member</NavLink>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(SignUpForm);
