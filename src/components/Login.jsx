import React, { Component } from "react";
import firebase from "../firebase";
import { Link } from "react-router-dom";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.props.history.push("/home");
        console.log(user);
      })
      .catch((error) => {
        this.setState({
          error,
        });
        alert(error);
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="Login container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card mt-5">
              <div className="card-header">
                <span className="card-title">SIGN IN</span>
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
                  <div className="form-check mb-3">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                      />
                      Remember Me
                    </label>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Sign In"
                      className="btn btn-primary btn-block"
                    />
                    <Link
                      to="/register"
                      className="btn btn-outline-primary btn-block"
                    >
                      Sing Up
                    </Link>
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

export default Login;
