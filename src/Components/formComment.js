import React from "react";
import axios from "axios";
import { Button } from 'react-bootstrap';
import FormFields from "../Widgets/forms/formFields";
const FormComment = (props) => {
  const { formData, updateForm, handleRefresh, postId } = props;
  const submitForm = (event) => {
    let formIsValid = true;
    let dataToSubmit = {};
    for (let key in formData) {
      dataToSubmit[key] = formData[key].value;
    }
    for (let key in formData) {
      formIsValid = formData[key].valid && formIsValid;
    }
    if (formIsValid) {
      dataToSubmit["postId"] = postId;
      axios
        .post(`http://localhost:4000/comments`, dataToSubmit)
        .then((res) => {});

      handleRefresh();
    }
    else{
      event.preventDefault()
    }
  };

  return (
    <form onSubmit={submitForm}>
      <FormFields
        formData={formData}
        onblur={(newState) => updateForm(newState)}
        change={(newState) => updateForm(newState)}
      />
      <Button type="submit">Validate</Button>
    </form>
  );
};

export default FormComment;
