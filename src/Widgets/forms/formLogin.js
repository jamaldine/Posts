import React from "react";
import "./formLogin.css";
import logo from "./logo/B-logo-1.png";
import google from "./google/google.png";
import { Typography, Button } from "@material-ui/core";
const FormLogin = (props) => {
  const template = () => {
    const { loginData } = props;
    let data = [];

    for (let element in loginData) {
      data.push({ id: element, setting: loginData[element] });
    }

    return data.map((item) => {
      return (
        <div style={{ marginBottom: "15px" }} key={item.id}>
          {renderTemplate(item)}
        </div>
      );
    });
  };

  const renderTemplate = (data) => {
    let template = null;
    let typeElement = data.setting;

    switch (typeElement.element) {
      case "input":
        template = (
          <div className="flex-row ">
            <label className="labelle">{typeElement.labelText}</label>{" "}
            <input className="select_form borderd " {...typeElement.config} />
          </div>
        );
        break;
      default:
        template = null;
    }

    return template;
  };
  return (
    <form className="login_container">
      <div class="flex-row">
        <img class="img" src={logo} alt="boukir" />
        <Typography class="flex-item">Live your day as you want</Typography>
      </div>
      <div class="flex-row separate">
        <Button onClick={props.signIn} variant="contained" color="default">
          <img class="google" src={google} alt="google" /> Continue with Google
        </Button>
      </div>
      <div class="flex-row separate">
        <hr />
        or
        <hr />
      </div>
      <div>{template()}</div>
      <Button
        variant="contained"
        color="primary"
        className="btn_form flex-item separate-top"
      >
        Sign In
      </Button>
      <div class="account flex-column">
        <Typography>dont have an account ?</Typography>
        <Typography class="pointer">Create account</Typography>
      </div>
    </form>
  );
};

export default FormLogin;
