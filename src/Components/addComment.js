import React from "react";
import Modal from "./modal";
import FormComment from "./formComment";

const AddComment = (props) => {
  const { handleCloseComment, anchorElComment, postId } = props;
  return (
    <Modal
      handleCloseComment={handleCloseComment}
      anchorElComment={anchorElComment}
    >
      <FormComment {...props} postId={postId} />
    </Modal>
  );
};

export default AddComment;
