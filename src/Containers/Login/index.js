import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { firebaseDB, googleAuth, firebase } from "../../firebase";

class Login extends Component {
  state = {
    status: null,
    isAuth: false,
  };

  signIn = () => {
    /*firebase.auth().signInWithPopup(googleAuth);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          isAuth: true,
        });
        return <Redirect to="/statistic" />;
      } else
        this.setState({
          isAuth: false,
        });
    });*/
  };

  signOut = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <div>
        login: <input type="text" />
        password: <input type="password" />
        <button onClick={this.signIn()}>Login</button>
        {/*<button onClick={this.signOut}>Logout</button>*/}
      </div>
    );
  }
}

export default Login;
