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
        .then(user => {
            this.props.history.push('/home')
            console.log(user)
        })
        .catch(error => {
            this.setState({
                error
            })
            alert(error)
        })
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="Login container">
        <div className="row">
          <div className="col-md-12">
            <div className="card mt-5">
              <div className="card-header">
                <h5 className="card-title">SIGN IN</h5>
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
                      value="Sing In"
                      className="btn btn-primary btn-block btn-lg"
                    />
                    <Link to='/register' className='btn btn-outline-primary btn-block btn-lg'>Sign Up</Link>
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
