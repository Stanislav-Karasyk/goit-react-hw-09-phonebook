import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h1>Register Page</h1>
        <h2>{this.props.error}</h2>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  error: state.auth.error,
});

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
