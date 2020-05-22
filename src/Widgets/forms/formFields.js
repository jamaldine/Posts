import React from "react";
import Alert from "react-bootstrap/Alert";

const FormFields = ({ formData, change }) => {
  console.log('formData', formData)
  const renderFields = () => {
    const formArray = [];
    for (let element in formData) {
      formArray.push({ id: element, setting: formData[element] });
    }
    return formArray.map((item) => {
      return <div key={item.id}>{renderTemplates(item)}</div>;
    });
  };

  const handleChange = (event, id, blur) => {
    const newState = formData;
    newState[id].value = event.target.value;
    if (blur) {
      let validData = validate(newState[id]);
      newState[id].valid = validData[0];
      newState[id].validationMessage = validData[1];
    }
    newState[id].touched = blur;
    change(newState);
  };
  const validate = (element) => {
    let error = [true, ""];
    let errorMessage = element.validationMessage;
    if (element.validation.minLen) {
      const valid = element.value.length >= element.validation.minLen;
      errorMessage = `${
        !valid
          ? "tapez au moins " + element.validation.minLen + " caractères"
          : ""
      }`;
      error = !valid ? [valid, errorMessage] : error;
    }
    if (element.validation.required) {
      const valid = element.value.trim() !== "";
      errorMessage = `${!valid ? "champs obligatoire" : ""}`;
      error = !valid ? [valid, errorMessage] : error;
    }

    return error;
  };
  const showValidation = (data) => {
    let message = null;
    if (data.validation && !data.valid)
      message = <Alert variant="danger">{data.validationMessage}</Alert>;

    return message;
  };
  const renderTemplates = (data) => {
    let values = data.setting;
    let formTemplate = "";
    switch (values.element) {
      case "input":
        formTemplate = (
          <div>
            {showLabel(values.label, values.labelText)}
            <input
              value={values.value}
              {...values.config}
              onBlur={(event) => handleChange(event, data.id, true)}
              onChange={(event) => handleChange(event, data.id, false)}
            />
            {showValidation(values)}
          </div>
        );
        break;
      case "textarea":
        formTemplate = (
          <div>
            {showLabel(values.label, values.labelText)}
            <textarea
              value={values.value}
              {...values.config}
              onChange={(event) => handleChange(event, data.id)}
            />
          </div>
        );
        break;
      case "select":
        formTemplate = (
          <div>
            {showLabel(values.label, values.labelText)}
            <select
              value={values.value}
              name={values.config.name}
              onChange={(event) => handleChange(event, data.id)}
            >
              {values.config.options.map((item) => {
                return (
                  <option key={item.val} value={item.val}>
                    {item.text}
                  </option>
                );
              })}
            </select>
          </div>
        );
        break;
      default:
        formTemplate = null;
    }
    return formTemplate;
  };
  const showLabel = (label, labelText) => {
    return label ? <label>{labelText} : </label> : null;
  };
  return <div>{renderFields()}</div>;
};

export default FormFields;
