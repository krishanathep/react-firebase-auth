import React, { Component } from "react";
import firebase from "../firebase";
import { Link } from "react-router-dom";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      error: null,
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, username, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = firebase.auth().currentUser;
        user
          .updateProfile({ displayName: username })
          .then(() => {
            this.props.history.push("/home");
          })
      })
      .catch((error) => {
        this.setState({ error });
        alert(error)
      });
  };

  render() {
    const { email, username, password, error } = this.state;
    return (
      <div className="Register container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card mt-5">
              <div className="card-header">
              <span className="card-title">
                  SIGN UP
                </span>
              </div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label>E-Mail Address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                      placeholder='E-Mail Address...'
                    />
                  </div>
                  <div className="form-group">
                    <label>User Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      value={username}
                      onChange={this.handleChange}
                      placeholder='User Name...'
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                      placeholder='Password...'
                    />
                  </div>
                  <div className="form-group mt-4">
                    <input
                      type="submit"
                      className="btn btn-primary btn-block"
                      value="Sign Up"
                    />
                    <Link to='/' className='btn btn-outline-primary btn-block'>Sign In</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
