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
          <div className="col-md-12">
            <div className="card mt-5">
              <div className="card-header">
                <h5 className="card-title">
                  SIGN UP
                </h5>
              </div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="">E-Mail :</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Username :</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      value={username}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Password :</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn btn-primary btn-block btn-lg"
                      value="Sign Up"
                    />
                    <Link to='/login' className='btn btn-outline-primary btn-block btn-lg'>Sign In</Link>
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
