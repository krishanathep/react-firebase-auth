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
        user.updateProfile({ displayName: username }).then(() => {
          this.props.history.push("/home");
        });
      })
      .catch((error) => {
        this.setState({ error });
        alert(error);
      });
  };

  render() {
    const { email, username, password } = this.state;
    return (
      <div className="Register container">
        <div class="col-md-12 min-vh-100 d-flex flex-column justify-content-center">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card shadow-lg">
                <div className="card-header">
                  <span className="card-title">SIGN UP</span>
                </div>
                <div className="card-body">
                  <form onSubmit={this.handleSubmit}>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-envelope"></i>
                        </span>
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        placeholder="E-mail"
                      />
                    </div>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-user"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                        placeholder="User name"
                      />
                    </div>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-key"></i>
                        </span>
                      </div>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group mt-4">
                      <input
                        type="submit"
                        className="btn btn-primary btn-block"
                        value="Sign Up"
                      />
                    </div>
                    <div className="from-group" align="center">
                      <Link to="/">Sign In</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
