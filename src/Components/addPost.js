import React, { useState, useEffect, useContext, useRef } from "react";

import { Button, Alert } from "react-bootstrap";
import Modal from "../HOC/modal";
import { SwitchLabels } from "../Widgets/API_components/switch";
import { modifyContext } from "./post";
import FormComment from "./formComment";
import "./styles/addPost.css";
const AddPost = (props) => {
  const titleRef = React.createRef();
  const switchRef = useRef();
  const { handleRefresh, modifyId, addPost, modifyPost, postItem } = props;
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [modify, setModify] = useContext(modifyContext);
  const [showComment, setShowComment] = useState(false);
  useEffect(() => {
    if (modifyId !== undefined) {
      setModify(postItem);
      setTitle(postItem?.title);
      setAuthor(postItem?.author);
    }
  }, [postItem]);

  const handleChange = (event, setValue) => {
    setValue(event.target.value);
  };

  const handleValid = (data) => {
    const dataLen = data.length;
    let valid = dataLen >= 5;
    let messageValid = null;
    messageValid = !valid ? "error" : null;
    return messageValid;
  };

  const handleSubmit = (event) => {
    const ValidationTitle = handleValid(title);
    const ValidationAuthor = handleValid(author);
    if (!ValidationAuthor && !ValidationTitle) {
      let visible = true;
      const postToSubmit = { title, author, visible };
      if (modify.id) {
        modifyPost(modify.id, postToSubmit);
      } else {
        addPost(postToSubmit);

      }
      handleRefresh();
    }
    event.preventDefault();
  };

  const requiredFields = (field, len) => {
    let requiredMessage = null;
    let name = Object.keys(field);
    const fieldIsDefined = field[name] !== undefined;
    if (fieldIsDefined) {
      const fielsLen = field[name].length;
      if (fielsLen < 5)
        requiredMessage = (
          <Alert variant="danger">tapez au moins 5 caractères !</Alert>
        );
      if (fielsLen === 0) requiredMessage = <div>champs obligatoire !</div>;
    }
    return requiredMessage;
  };

  return (
    <form onSubmit={handleSubmit} className="center-screen">
      <div>
        <label>Title :</label>
        <input
          ref={titleRef}
          name="title"
          type="text"
          value={title}
          onChange={(event) => {
            handleChange(event, setTitle);
          }}
        />
        {requiredFields({ title }, true)}
      </div>
      <div>
        <label>Author :</label>
        <input
          name="author"
          type="text"
          value={author}
          onChange={(event) => {
            handleChange(event, setAuthor);
          }}
        />
        {requiredFields({ author }, false)}
      </div>
      <SwitchLabels ref={switchRef} setShowComment={setShowComment} />
      {showComment && <FormComment />}
      <Button type="submit">Validate</Button>
    </form>
  );
};

export default Modal(AddPost);
