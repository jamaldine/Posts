import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { googleAuth, firebase } from "../../firebase";
import FormLogin from '../../Widgets/forms/formLogin';
import "./login.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginData: {
        login: {
          value: "",
          label: true,
          labelText: "login",
          element: "input",
          config: {
            type: "text",
            name: "comment_input",
            placeholder: "Entrer le login",
          },
          validation: {
            required: true,
            minLen: 5,
          },
          valid: false,
          validationMessage: "",
          touched: false,
        },
        password: {
          value: "",
          label: true,
          labelText: "password",
          element: "input",
          config: {
            type: "password",
            name: "password_input",
            placeholder: "Entrer le password",
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
    return <FormLogin {...this.props} signIn={this.signIn} loginData={this.state.loginData} />;
  }
}

export default Login;
