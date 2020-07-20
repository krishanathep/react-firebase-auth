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
          <div className="col-md-4 offset-md-4">
            <div className="card shadow-lg mt-5">
              <div className="card-header">
                <span className="card-title">SIGN IN</span>
              </div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className='input-group-text'><i className="fas fa-envelope"></i></span>
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                      placeholder='E-mail'
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className='input-group-text'><i className="fas fa-key"></i></span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                      placeholder='Password'
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
                  </div>
                  <div className="form-group">
                  <p align='center'>Don't have an account?&nbsp;
                    <Link
                      to="/register"
                    >
                      Sing Up
                    </Link>
                    </p>
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
