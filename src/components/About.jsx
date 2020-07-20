import React, { Component } from "react";
import Navbar from "../components/Navbar";
import firebase from "../firebase";

class About extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("Hello", user.displayName);
      } else {
        window.location = "/";

        console.log("Please Login!");
      }
    });
  }

  render() {
    return (
      <div className="About">
        <Navbar />
        <div className="container">
          <h1>This is an About page!</h1>
        </div>
      </div>
    );
  }
}

export default About;
