import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase, { auth } from "../firebase";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  logOutUser = () => {
    firebase
      .auth()
      .signOut()
      .then((window.location = "/"));
  };

  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
          <div className="container fluid">
            <Link to="/home" className="navbar-brand">
              REACTJS FIREBASE AUTH
            </Link>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  <i className="fa fa-user"></i>
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item">
                    {this.state.user.displayName}
                  </Link>
                  <Link onClick={this.logOutUser} className="dropdown-item">
                    Sing Out
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
