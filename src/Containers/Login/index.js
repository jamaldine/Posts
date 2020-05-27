import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { firebaseDB, googleAuth, firebase } from "../../firebase";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null
    };
  }
componentDidMount(){
  firebase.auth().onAuthStateChanged((user) => {
    if (user) console.log('user',user); else console.log('not user')
  });
}
  signIn = () => {
    firebase.auth().signInWithPopup(googleAuth);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.handleHome();
      } else
        console.log('connot to connect !')
    }); 
  };

  signOut = () => {
    firebase.auth().signOut();
  };

  render() {
    if (!this.props.home) {
      return <Redirect to="/statistic" />;
    }
    return (
      <div>
        login: <input type="text" />
        password: <input type="password" />
        <button onClick={this.signIn}>Login</button>
      </div>
    );
  }
}

export default Login;
