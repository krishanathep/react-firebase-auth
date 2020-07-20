import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NoMatch from "./components/NoMatch";
import firebase, { auth } from "./firebase";
import About from "./components/About";

export class App extends Component {
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
      <div className="App">
        <HashRouter basename="/">
          <Switch>
            <Route
              exact
              path="/home"
              render={(props) => (
                <Home
                  {...props}
                  logOutUser={this.logOutUser}
                  user={this.state.user}
                />
              )}
            />
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact component={NoMatch} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
