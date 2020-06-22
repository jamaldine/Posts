import React from "react";
import Modal from "./modal";
import FormComment from "./formComment";

const AddComment = (props) => {
  const { handleCloseComment, anchorElComment, postId } = props;
  return (
    <Modal
      handleCloseModal={handleCloseComment}
      anchorElModal={anchorElComment}
    >
      <FormComment {...props} postId={postId} />
    </Modal>
  );
};

export default AddComment;
