import React from "react";
import firebase from "../firebase";
import Navbar from "../components/Navbar";

const Home = (props) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("Hello", user.displayName);
    } else {
      window.location = "/";

      console.log("Please Login!");
    }
  });

  return (
    <div className="Home">
      <Navbar />
      <div className="container">
        <h1>This is an Home page!</h1>
      </div>
    </div>
  );
};

export default Home;
