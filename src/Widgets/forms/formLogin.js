import React from "react";
import './formLogin.css';
const FormLogin = (props) => {
  const template = () => {
    const { loginData } = props;
    let data = [];

    for (let element in loginData) {
      data.push({ id: element, setting: loginData[element] });
    }

    return data.map((item) => {
      return <div key={item.id}>{renderTemplate(item)}</div>;
    });
  };

  const renderTemplate = (data) => {
    let template = null;
    let typeElement = data.setting;

    switch (typeElement.element) {
      case "input":
        template = (
          <div>
            <label className='labelle'>{typeElement.labelText}</label> : <input className='select_form' {...typeElement.config} />
          </div>
        );
        break;
      default:
        template = null;
    }

    return template;
  };
  return (
    <form className='login_container'>
      {template()}
      <button onClick={props.signIn} className='btn_form'>Sign In</button>
    </form>
  );
};

export default FormLogin;
