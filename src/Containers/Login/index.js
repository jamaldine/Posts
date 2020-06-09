import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { googleAuth, firebase } from "../../firebase";
import FormLogin from "../../Widgets/forms/formLogin";
import "./login.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginData: {
        Login: {
          value: "",
          label: true,
          labelText: "Login",
          element: "input",
          config: {
            type: "text",
            name: "login",
          },
          validation: {
            required: true,
            minLen: 5,
          },
          valid: false,
          validationMessage: "",
          touched: false,
        },
        Password: {
          value: "",
          label: true,
          labelText: "Password",
          element: "input",
          config: {
            type: "password",
            name: "password",
          },
          validation: {
            required: true,
            minLen: 5,
          },
          valid: false,
          validationMessage: "",
          touched: false,
        },
      },
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) console.log("user", user);
      else console.log("not user");
    });
  }
  signIn = () => {
    firebase.auth().signInWithPopup(googleAuth);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.handleHome();
      } else console.log("connot to connect !");
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
      <FormLogin
        {...this.props}
        signIn={this.signIn}
        loginData={this.state.loginData}
      />
    );
  }
}

export default Login;
