import React from "react";

const FormLogin = (props) => {
  const template = () => {
    return (
      <div>
        login: <input type="text" />
        password: <input type="password" />
        <button onClick={props.signIn}>Login</button>
      </div>
    );
  };
  return template();
};

export default FormLogin;
